import { Document } from 'mongoose'

export type IFeedbackResp = Pick<IFeedback, 'id' | 'rating' | 'text'>

export interface IFeedback extends Document {
  rating: number
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
