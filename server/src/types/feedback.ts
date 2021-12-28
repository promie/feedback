import { Document } from 'mongoose'

export interface IFeedback extends Document {
  rating: number
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
