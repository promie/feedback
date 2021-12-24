import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFeedback } from '../../store/actions'
import { motion, AnimatePresence } from 'framer-motion'
import { IFeedback } from '../../types/feedback'
import FeedbackItem from '../FeedbackItem'

const FeedbackList: FC = () => {
  const feedbackState = useSelector((state: any) => state.feedback)
  const { feedback } = feedbackState
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeedback())
  }, [feedback])

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
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
