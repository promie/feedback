import { FeedbackRepository } from '../repositories'
import { IFeedback } from '../types/feedback'

const createFeedback = (body: IFeedback) => {
  return FeedbackRepository.createFeedback(body)
}

const getFeedback = () => {
  return FeedbackRepository.getFeedback()
}

export default {
  createFeedback,
  getFeedback,
}
