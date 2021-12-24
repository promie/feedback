import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFeedback } from '../../store/actions'
import { motion, AnimatePresence } from 'framer-motion'
import { IFeedback } from '../../types/feedback'
import FeedbackItem from '../FeedbackItem'

interface IFeedbackListProps {
  handleDelete: (id: number | string | undefined) => void
}

const FeedbackList: FC<IFeedbackListProps> = ({ handleDelete }) => {
  const feedbackState = useSelector((state: any) => state.feedback)
  const { feedback } = feedbackState
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedback())
  }, [])

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item: IFeedback) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
