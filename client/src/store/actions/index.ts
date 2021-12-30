import FeedbackService from '../../service/feedback'
import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from './types'

const getFeedback = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_FEEDBACK })

    const feedback = await FeedbackService.getFeedback()

    dispatch(getFeedbackSuccess(feedback))
  }
}

const getFeedbackSuccess = (feedbacks: any) => {
  return {
    type: GET_FEEDBACK_SUCCESS,
    payload: feedbacks,
  }
}

export { getFeedback }
