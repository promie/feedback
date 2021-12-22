import React, { FC, useState } from 'react'
import { IFeedback } from './types/feedback'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeebackData'

const App: FC = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(FeedbackData)

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
