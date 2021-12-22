import React, { FC } from 'react'
import { IFeedback } from '../../types/feedback'

interface IFeedbackStatsProps {
  feedback: IFeedback[]
}

const FeedbackStats: FC<IFeedbackStatsProps> = ({ feedback }) => {
  let average =
    feedback.reduce((acc: number, cur: IFeedback) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = Number.parseInt(average.toFixed(1).replace(/[.,]0$/, ''))

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
