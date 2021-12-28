import { IFeedback } from '../types/feedback'
import { model, Schema } from 'mongoose'

const FeedbackSchema: Schema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const Feedback = model<IFeedback>('Feedback', FeedbackSchema)

export default Feedback
