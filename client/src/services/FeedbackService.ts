import axios from 'axios'

const getFeedback = async () => {
  const response = await axios.get('/api/v1/feedback')

  return response.data.feedback
}

const addFeedback = async (newFeedback: any) => {
  const response = await axios.post('/api/v1/feedback', newFeedback)

  return response.data.feedback
}

const deleteFeedback = (feedbackId: number | string | undefined) => {
  return axios.delete(`/api/v1/feedback/${feedbackId}`)
}

export default {
  getFeedback,
  addFeedback,
  deleteFeedback,
}
