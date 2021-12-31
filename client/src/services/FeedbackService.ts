import api from './api/api'

const fetchFeedback = async () => {
  const response = await api.get('/api/v1/feedback')

  return response.data.feedback
}

export default {
  fetchFeedback,
}
