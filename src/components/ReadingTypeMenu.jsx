import { useState } from 'react'

const ReadingTypeMenu = () => {
  const [readingType, setReadingType] = useState('card-of-day')
  const [customType, setCustomType] = useState('')

  const handleReadingType = (e) => {
    setReadingType(e.target.value)
  }

  return (
    <div>
      <select value={readingType} onChange={handleReadingType}>
        <option value="card-of-day">Card of the Day</option>
        <option value="love-reading">Love Reading</option>
        <option value="past-present-future-advice">Past/Present/Future/Advice</option>
        <option value="custom">Custom</option>
      </select>
      
      {readingType === 'custom' && (
          <input 
            type="text"
            placeholder="Enter reading type"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
          />
      )}
    </div>
  )
}

export default ReadingTypeMenu