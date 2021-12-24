import FeedbackService from '../../service/feedback'
import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS, DELETE_FEEDBACK } from './types'

const getFeedback = () => {
  return (dispatch: any) => {
    dispatch({ type: GET_FEEDBACK })

    const feedbacks = FeedbackService.getFeedbacks()

    dispatch(getFeedbackSuccess(feedbacks))
  }
}

const deleteFeedback = (id: number | string | undefined) => {
  return {
    type: DELETE_FEEDBACK,
    payload: id,
  }
}

const getFeedbackSuccess = (feedbacks: any) => {
  return {
    type: GET_FEEDBACK_SUCCESS,
    payload: feedbacks,
  }
}

export { getFeedback, deleteFeedback }
