import { useState } from 'react'
import { createReading } from '../services/readingService'
import { getAllReadings } from '../services/readingService'

function TestComponent() {
  const [resultOne, setResultsOne] = useState(null)
  const [loadingOne, setLoadingOne] = useState(false)
    const [resultTwo, setResultsTwo] = useState(null)
  const [loadingTwo, setLoadingTwo] = useState(false)

  const testCreateReading = async () => {
    setLoadingOne(true)
    setResultsOne(null)

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
    const resultOne = await createReading(testReading)

    console.log('Recieved results:', resultOne)
    setResultsOne(resultOne)
    setLoadingOne(false)
  }

  const testGetAllReadings = async () => {
    setLoadingTwo(true)
    setResultsTwo(null)

    //calling function 
    const resultTwo = await getAllReadings()

    console.log('recieved all readings', resultTwo)
    setResultsTwo(resultTwo)
    setLoadingTwo(false)
  }

  return (
    <div>
      <h2>Test Functions</h2>
      <button 
        onClick={testCreateReading} 
        disabled={loadingOne}
      >
        {loadingOne ? 'Testing...' : 'Test Create Reading'}  
      </button>

      <button 
        onClick={testGetAllReadings} 
        disabled={loadingTwo}
      >
        {loadingTwo ? 'Testing...' : 'Test Get All Readings'}  
      </button>
    
      {resultOne && (
        <div>
          {resultOne.success ? (
            <div>
              <h3>Success!</h3>
              <p>create reading function working</p>
            </div>
          ) : (
            <div>
              <h3>error</h3>
              <p>create reading function not working</p>
            </div>
          )}     
        </div>
      )}

      {resultTwo && (
        <div>
          {resultTwo.success ? (
            <div>
              <h3>Success!</h3>
              <p>Get All Readings function working</p>
            </div>
          ) : (
            <div>
              <h3>error</h3>
              <p>Get All Readings function not working</p>
            </div>
          )}     
        </div>
      )}
    </div>  
  )
}

export default TestComponent 