import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from '../actions/types'

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
  }

  return state
}

export { feedbackReducer }
