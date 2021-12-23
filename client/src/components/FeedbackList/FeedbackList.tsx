import React, { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
