import axios from 'axios'

const fetchFeedback = async () => {
  const response = await axios.get('/api/v1/feedback')

  return response.data.feedback
}

const addFeedback = async (newFeedback: any) => {
  const response = await axios.post('/api/v1/feedback', newFeedback)

  return response.data.feedback
}

export default {
  fetchFeedback,
  addFeedback,
}
