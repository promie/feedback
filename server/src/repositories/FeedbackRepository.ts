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

const getFeedback = async (): Promise<IFeedbackResp[]> => {
  const feedback = await Feedback.find({}).sort({ _id: -1 }).exec()

  return feedback.map((f: IFeedback) => {
    return {
      id: f._id,
      rating: f.rating,
      text: f.text,
    }
  })
}

export default {
  createFeedback,
  getFeedback,
}
