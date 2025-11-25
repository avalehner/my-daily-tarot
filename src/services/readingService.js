import { supabase } from "../supabaseClient"

//create reading

export const createReading = async (readingData) => {
  try {
    //inserts data into database 
    const { data, error } = await supabase 
      .from('readings')
      .insert({
        reading_date: readingData.reading_date, 
        reading_type: readingData.reading_type,
        cards: readingData.cards,
        notes: readingData.notes
      })
      .select () //return the created reading 

      //checking for supabase errors, if true jumps to catch block 
      if (error) throw error

      return {
        success: true, 
        data: data[0] //returns created reading
      }
  } catch (error) {

    console.error('Error creating reading:', error)

    return {
      success: false, 
      error: error.message 
    }
  }
}

export const getAllReadings = async () => {
  try {
    const { data , error } = await supabase
      .from('readings')
      .select('*')
      .order('reading_date', { ascending: false })

    if (error) throw error 

    return { success: true, data }

  } catch (error) {
    console.error('Error:', error)
    return { success:false, error: error.message}
  }
}
