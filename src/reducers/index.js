import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

/* combine all the reducers into one root reducer */
/* since the createStore function only accepts a single reducer */

export default combineReducers({
  authedUser,
  users,
  questions,
})

