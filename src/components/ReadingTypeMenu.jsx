const ReadingTypeMenu = ({ 
  readingType, 
  setReadingType, 
  customReadingType, 
  setCustomReadingType 
}) => {

  const handleReadingType = (e) => {
    setReadingType(e.target.value)
  }

  return (
    <div>
      <p>Reading Type:</p>
      <select value={readingType} onChange={handleReadingType}>
        <option value="card-of-day">Daily</option>
        <option value="love-reading">Love</option>
        <option value="health">Health</option>
        <option value="career">Career</option>
        <option value="finances">Finances</option>
        <option value="family">Family</option>
        <option value="custom">Custom</option>
      </select>
      
      {readingType === 'custom' && (
          <input 
            type="text"
            placeholder="Enter reading type"
            value={customReadingType}
            onChange={(e) => setCustomReadingType(e.target.value)}
          />
      )}
    </div>
  )
}

export default ReadingTypeMenu