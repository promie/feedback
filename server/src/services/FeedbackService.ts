import { FeedbackRepository } from '../repositories'
import { IFeedback } from '../types/feedback'

const createFeedback = (body: IFeedback) => {
  return FeedbackRepository.createFeedback(body)
}

const getFeedback = () => {
  return FeedbackRepository.getFeedback()
}

const editFeedback = (feedbackId: string, feedback: IFeedback) => {
  return FeedbackRepository.editFeedback(feedbackId, feedback)
}

export default {
  createFeedback,
  getFeedback,
  editFeedback,
}
