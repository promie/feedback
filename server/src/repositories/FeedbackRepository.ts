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

const editFeedback = async (
  feedbackId: string,
  feedback: IFeedback,
): Promise<IFeedbackResp> => {
  const updatedFeedback: any = await Feedback.findOneAndUpdate(
    { _id: feedbackId },
    feedback,
    {
      new: true,
    },
  )

  return {
    id: updatedFeedback._id,
    rating: updatedFeedback.rating,
    text: updatedFeedback.text,
  }
}

const deleteFeedback = (feedbackId: string) => {
  return Feedback.findOneAndDelete({ _id: feedbackId })
}

export default {
  createFeedback,
  getFeedback,
  editFeedback,
  deleteFeedback,
}
