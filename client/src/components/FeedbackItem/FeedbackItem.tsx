import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import { IFeedback } from '../../types/feedback'
import Card from '../shared/Card'

interface FeedbackItemProps {
  item: IFeedback
  handleDelete: (id: number) => void
}

const FeedbackItem: FC<FeedbackItemProps> = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
