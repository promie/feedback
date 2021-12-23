import React, { FC } from 'react'
import { IFeedback } from '../../types/feedback'
import FeedbackItem from '../FeedbackItem'

interface IFeedbackListProps {
  feedback: IFeedback[]
  handleDelete: (id: number | string | undefined) => void
}

const FeedbackList: FC<IFeedbackListProps> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item: IFeedback) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList
