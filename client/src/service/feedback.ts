import api from '../api/api'

const getFeedback = async () => {
  const feedback = await api.get('/api/v1/feedback')

  console.log('feedback', feedback)
}

export default {
  getFeedback,
}
