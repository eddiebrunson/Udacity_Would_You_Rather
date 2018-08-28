import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

//redux-thunk to make asychronous request 
export function handleInitialData () {
  return (dispatch) => {
    //returns a promise 
    return getInitialData()
	  .then(({ users, questions }) => {
	  	dispatch(receiveUsers(users))
	  	dispatch(receiveQuestions(questions))
	  	dispatch(setAuthedUser(AUTHED_ID))
	  })
  }			
}  
 



