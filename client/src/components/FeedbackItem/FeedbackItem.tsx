import React, { FC } from 'react'
import { FaTimes } from 'react-icons/fa'
import { IFeedback } from '../../types/feedback'
import Card from '../shared/Card'
import { useDispatch } from 'react-redux'
import { deleteFeedback } from '../../store/actions'

interface FeedbackItemProps {
  item: IFeedback
}

const FeedbackItem: FC<FeedbackItemProps> = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => dispatch(deleteFeedback(item.id))}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
