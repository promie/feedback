import { Feedback } from '../models'
import { IFeedback, IFeedbackResp } from '../types/feedback'

const createFeedback = async (body: IFeedback): Promise<IFeedbackResp> => {
  const newFeedback = await Feedback.create(body)

  return {
    id: newFeedback._id,
    rating: newFeedback.rating,
    text: newFeedback.text,
  }
}

const getFeedback = () => {
  return Feedback.find({}).exec()
}

export default {
  createFeedback,
  getFeedback,
}
