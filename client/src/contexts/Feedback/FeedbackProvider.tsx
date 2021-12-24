import React, { FC, createContext, useState } from 'react'
import FeedbackData from '../../data/FeebackData'

const contextDefaultValue = {
  feedback: FeedbackData,
}

export const FeedbackContext = createContext(contextDefaultValue)

const FeedbackProvider: FC = ({ children }): any => {
  const [feedback, setFeedback] = useState(contextDefaultValue.feedback)

  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider
