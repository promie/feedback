import React, { FC, useContext } from 'react'
import { FeedbackContext } from '../../contexts/Feedback'
import { motion, AnimatePresence } from 'framer-motion'
import { IFeedback } from '../../types/feedback'
import FeedbackItem from '../FeedbackItem'
import Spinner from '../shared/Spinner'

const FeedbackList: FC = () => {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item: IFeedback) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
