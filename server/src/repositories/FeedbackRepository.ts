import { Feedback } from '../models'

const createFeedback = (body: any) => {
  return Feedback.create(body)
}

const getFeedback = () => {
  return Feedback.find({}).exec()
}

export default {
  createFeedback,
  getFeedback,
}
