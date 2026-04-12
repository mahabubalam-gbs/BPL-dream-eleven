import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const [toggle, setToggle] = useState(true)

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-300 mx-auto flex justify-between items-center py-5 text-black'>
        <h1 className='font-bold text-xl'>Available Players</h1>
        <div className='font-bold'>
          <button onClick={() => { setToggle(true) }} className={`py-2 px-5 border border-r-0 rounded-l-2xl border-gray-400 ${toggle === true ? "bg-[#E7FE29]" : ""}`}> Available</button>
          <button onClick={() => { setToggle(false) }} className={`py-2 px-5 border border-l-0 rounded-r-2xl border-gray-400 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span> (0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }


    </>
  )
}

export default App
