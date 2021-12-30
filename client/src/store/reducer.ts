import { combineReducers } from 'redux'
import { feedbackReducer } from './reducers/feedback'

const rootReducer = combineReducers({
  feedback: feedbackReducer,
})

export default rootReducer
