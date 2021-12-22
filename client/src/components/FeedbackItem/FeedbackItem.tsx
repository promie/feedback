import React, { FC } from 'react'
import { IFeedback } from '../../types/feedback'

interface FeedbackItemProps {
  item: IFeedback
}

const FeedbackItem: FC<FeedbackItemProps> = ({ item }) => {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem
