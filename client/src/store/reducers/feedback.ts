import { GET_FEEDBACK, GET_FEEDBACK_SUCCESS } from '../actions/types'

const initialState = {
  loading: false,
  data: [],
}

const feedbackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        loading: true,
        data: [],
      }
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
  }

  return state
}

export { feedbackReducer }
