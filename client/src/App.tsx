import React, { FC, useState } from 'react'
import { IFeedback } from './types/feedback'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeebackData'
import FeedbackStats from './components/FeedbackStats'

const App: FC = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(FeedbackData)

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item: IFeedback) => item.id !== id))
    }
  }

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
