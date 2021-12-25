import React, { FC, createContext, useState } from 'react'
import FeedbackData from '../../data/FeebackData'
import { IFeedback } from '../../types/feedback'
import { v4 as uuidv4 } from 'uuid'

const contextDefaultValue = {
  feedback: FeedbackData,
  deleteFeedback: (id: string | number | undefined) => {},
  addFeedback: (newFeedback: IFeedback) => {},
  editFeedback: (item: any) => {},
  feedbackEdit: {
    item: {
      id: -1,
      rating: -1,
      text: '',
    },
    edit: false,
  },
}

export const FeedbackContext = createContext(contextDefaultValue)

const FeedbackProvider: FC = ({ children }): any => {
  const [feedback, setFeedback] = useState<IFeedback[]>(
    contextDefaultValue.feedback,
  )
  const [feedbackEdit, setFeedbackEdit] = useState<any>(
    contextDefaultValue.feedbackEdit,
  )

  const deleteFeedback = (id: number | string | undefined) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item: IFeedback) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback: IFeedback) => {
    newFeedback.id = uuidv4()

    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item: any) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider
