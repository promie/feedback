import axios from 'axios'

const fetchFeedback = async () => {
  const response = await axios.get('/api/v1/feedback')

  return response.data.feedback
}

export default {
  fetchFeedback,
}
