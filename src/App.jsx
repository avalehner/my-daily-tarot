import { useState } from 'react'
import { createReading } from './services/readingService' 
import './App.css'
import AddCardButton from './components/AddCardButton'
import ReadingTypeMenu from './components/ReadingTypeMenu'

function App() {
  const [date, setDate] = useState('')
  const [readingType, setReadingType] = useState('card-of-day')
  const [customReadingType, setCustomReadingType] = useState('')
  const [cards, setCards] = useState([])
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const saveReading = async () => {
    setSaving(true)
    setMessage('')

    const reading = {
      reading_date: date, 
      reading_type: readingType === 'custom' ? customReadingType : readingType, 
      cards: cards.filter(c => c), //removes empty strings 
      notes: notes
    }

    const result = await createReading(reading)

    if(result.success) {
      setMessage('reading saved')
      setDate('')
      setCards([])
      setNotes('')
    } else {
      setMessage('error:' + result.error)
    }

    setSaving(false)
  }

  return (
    <>
      <h1>My Tarot Tracker</h1>
      <input 
        type="date" 
        value={date}
        placeholder="Enter date"
        onChange={(e) => setDate(e.target.value)} //when onchange fires it recieves an event object. this includes the target (input element), the target.value (what the user inputted), the target.name (name of the input)
      />
      <ReadingTypeMenu 
        readingType={readingType}
        setReadingType={setReadingType}
        customReadingType={customReadingType}
        setCustomReadingType={setCustomReadingType}
      /> 
      <div id="card-inputs">
        <input 
          type="text" 
          placeholder="Enter card" 
          className="card-input"
          value={cards[0] || ''}
          onChange={(e) => setCards([e.target.value])}
        />
      <AddCardButton />
      </div>
      <div className="reading-notes">
        <input 
          type="text" 
          value={notes}
          placeholder="notes"
          onChange={(e) => setNotes(e.target.value)} 
        />
      </div>
      <div>
        <button
          onClick={saveReading}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Reading'}
        </button>
        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default App
