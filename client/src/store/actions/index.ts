import FeedbackService from '../../service/feedback'
import { CREATE_FEEDBACK, GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from './types'

const getFeedback = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_FEEDBACK })

    const feedback = await FeedbackService.getFeedback()

    dispatch(getFeedbackSuccess(feedback))
  }
}

const getFeedbackSuccess = (feedback: any) => {
  return {
    type: GET_FEEDBACK_SUCCESS,
    payload: feedback,
  }
}

const createFeedback = (feedback: any) => {
  return {
    type: CREATE_FEEDBACK,
    payload: feedback,
  }
}

export { getFeedback, createFeedback }
