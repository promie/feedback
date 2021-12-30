import FeedbackService from '../../service/feedback'
import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from './types'

const getFeedback = () => {
  return (dispatch: any) => {
    dispatch({ type: GET_FEEDBACK })

    const feedbacks = FeedbackService.getFeedback()

    dispatch(getFeedbackSuccess(feedbacks))
  }
}

const getFeedbackSuccess = (feedbacks: any) => {
  return {
    type: GET_FEEDBACK_SUCCESS,
    payload: feedbacks,
  }
}

export { getFeedback }
