import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(3000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (deletedPlayer) => {
    const filteredData = purchasedPlayers.filter(player => player.id !== deletedPlayer.id);
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(deletedPlayer.price.split("USD").join("").split(",").join("")))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-300 mx-auto flex justify-between items-center py-5 text-black'>
        <h1 className='font-bold text-xl'>{
          toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`
        }</h1>
        <div className='font-bold'>
          <button onClick={() => { setToggle(true) }} className={`py-2 px-5 border border-r-0 rounded-l-2xl border-gray-400 ${toggle === true ? "bg-[#E7FE29]" : ""}`}> Available</button>
          <button onClick={() => { setToggle(false) }} className={`py-2 px-5 border border-l-0 rounded-r-2xl border-gray-400 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected<span> ({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers} ></SelectedPlayers>
      }

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
