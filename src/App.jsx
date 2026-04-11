import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-300 mx-auto flex justify-between items-center py-5'>
        <h1>Available Players</h1>
        <div>
          <button className='py-2 px-5 border border-r-0 rounded-l-2xl border-gray-400'>Available</button>
          <button className='py-2 px-5 border border-l-0 rounded-r-2xl border-gray-400'>Selected</button>
        </div>
      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
