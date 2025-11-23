import { useState } from 'react'
import { createReading } from "../services/readingService"

function TestComponent() {
  const [result, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const testCreateReading = async () => {
    setLoading(true)
    setResults(null)

    //create test data 
    const testReading = {
      reading_date: new Date().toISOString().split('T')[0], //today's date 
      reading_type: 'card-of-day', 
      cards: [
        {
          name: 'The Fool', 
          position: 1, 
          reversed: false
        }
      ], 
      notes: 'test reading'
    }

    console.log('sending test data:', testReading)

    //call service function 
    const result = await createReading(testReading)

    console.log('Recieved results:', result)
    setResults(result)
    setLoading(false)
  }

  return (
    <div>
      <h2>test createReading function</h2>
      <button 
        onClick={testCreateReading} 
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test Create Reading'}  
      </button>
    
      {result && (
        <div>
          {result.success ? (
            <div>
              <h3>Success!</h3>
              <p>function working</p>
            </div>
          ) : (
            <div>
              <h3>error</h3>
              <p>function not working</p>
            </div>
          )}     
        </div>
      )}
    </div>  
  )
}

export default TestComponent 

