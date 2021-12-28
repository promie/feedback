import { FeedbackRepository } from '../repositories'

const createFeedback = (body: any) => {
  return FeedbackRepository.createFeedback(body)
}

const getFeedback = () => {
  return FeedbackRepository.getFeedback()
}

export default {
  createFeedback,
  getFeedback,
}
