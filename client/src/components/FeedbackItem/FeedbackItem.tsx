import React, { FC, useContext } from 'react'
import { FeedbackContext } from '../../contexts/Feedback'
import { FaTimes } from 'react-icons/fa'
import { IFeedback } from '../../types/feedback'
import Card from '../shared/Card'

interface FeedbackItemProps {
  item: IFeedback
}

const FeedbackItem: FC<FeedbackItemProps> = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
