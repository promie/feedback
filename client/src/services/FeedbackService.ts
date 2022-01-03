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

const updateFeedback = async (
  feedbackId: number | string | undefined,
  updItem: any,
) => {
  const response = await axios.put(`/api/v1/feedback/${feedbackId}`, updItem)

  return response.data.feedback
}

export default {
  getFeedback,
  addFeedback,
  deleteFeedback,
  updateFeedback,
}
