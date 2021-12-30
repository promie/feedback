import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from '../actions/types'

const initialState = {
  loading: false,
  feedback: [],
}

const feedbackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        loading: true,
        feedback: [],
      }
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedback: action.payload,
      }
  }
}

export { feedbackReducer }
