import api from '../api/api'

const getFeedback = async () => {
  const feedback = await api.get('/api/v1/feedback')

  return feedback.data
}

export default {
  getFeedback,
}
