import {
  GET_FEEDBACK,
  GET_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK,
} from '../actions/types'
import { IFeedback } from '../../types/feedback'

const initialState = {
  feedback: [],
}

const feedbackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: [],
      }
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: action.payload,
      }

    case DELETE_FEEDBACK:
      const newObject = state.feedback.filter(
        (item: IFeedback) => item.id !== action.payload,
      )

      console.log('new object', newObject)

      return {
        ...state,
        feedback: state.feedback.filter(
          (item: IFeedback) => item.id !== action.payload,
        ),
      }
  }

  return state
}

export { feedbackReducer }
