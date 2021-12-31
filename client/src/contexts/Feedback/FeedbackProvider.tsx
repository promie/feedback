import React, { FC, createContext, useState, useEffect } from 'react'
import { FeedbackService } from '../../services'
import { IFeedback } from '../../types/feedback'
import { v4 as uuidv4 } from 'uuid'
import { Feedback } from '../../../../server/src/models'

const contextDefaultValue = {
  feedback: [],
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
  updateFeedback: (id: any, updItem: any) => {},
}

export const FeedbackContext = createContext(contextDefaultValue)

const FeedbackProvider: FC = ({ children }): any => {
  const [feedback, setFeedback] = useState<any>(contextDefaultValue.feedback)
  const [feedbackEdit, setFeedbackEdit] = useState<any>(
    contextDefaultValue.feedbackEdit,
  )

  useEffect(() => {
    const fetchFeedback = async () => {
      const feedback = await FeedbackService.fetchFeedback()

      setFeedback(feedback)
    }

    fetchFeedback()
  }, [])

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

  const updateFeedback = (id: any, updItem: any) => {
    setFeedback(
      feedback.map((item: any) =>
        item.id === id ? { ...item, ...updItem } : item,
      ),
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider
