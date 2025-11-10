// import { useState } from 'react'
import './App.css'
import AddCardButton from './components/AddCardButton'

function App() {
  return (
    <>
      <h1>Card of the day</h1>
      <input type="date" placeholder="Enter date" />
      <div id="card-inputs">
        <input type="text" placeholder="Enter card" className="card-input" />
      <AddCardButton />
      </div>
      <div className="reading-notes">
        <input type="text" placeholder="notes" />
      </div>
      <div>
        <button>Save Reading</button>
      </div>
    </>
  )
}
export default App
