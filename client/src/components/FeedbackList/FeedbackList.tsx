import React, { FC } from 'react'
import { IFeedback } from '../../types/feedback'
import FeedbackItem from '../FeedbackItem'

interface IFeedbackListProps {
  feedback: IFeedback[]
}

const FeedbackList: FC<IFeedbackListProps> = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item: IFeedback) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList
