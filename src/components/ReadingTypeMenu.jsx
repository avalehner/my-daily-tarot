import { useState } from 'react'

const ReadingTypeMenu = () => {
  const [readingType, setReadingType] = useState(['Card of the day'])

  return (
    <div>
      <p>Selected: {readingType}</p>
      <p>Custom: {setReadingType}</p>
    </div>
  )
}

export default ReadingTypeMenu