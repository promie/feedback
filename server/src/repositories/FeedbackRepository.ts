import { Feedback } from '../models'

const createFeedback = async (body: any) => {
  return Feedback.create(body)
}

const getFeedback = () => {
  return Feedback.find({}).exec()
}

export default {
  createFeedback,
  getFeedback,
}
