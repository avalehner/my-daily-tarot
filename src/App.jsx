// import { useState } from 'react'
import './App.css'
import AddCardButton from './components/AddCardButton'
import ReadingTypeMenu from './components/ReadingTypeMenu'
import TestComponent from './components/testComponent'

function App() {
  return (
    <>
      <h1>My Tarot Tracker</h1>
      <input type="date" placeholder="Enter date" />
      <ReadingTypeMenu /> 
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
      <TestComponent /> 
    </>
  )
}


export default App
