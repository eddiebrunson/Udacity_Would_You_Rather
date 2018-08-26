import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '..actions/questions'

//redux-thunk to make asychronous request 
export function handleInitialData () {
  return (dispatch) => {
    //returns a promise 
    return getInitialData()
	  .then(({ users, polls }) => {
	  	dispatch(receiveUsers(users))
	  	dispatch(receiveQuestions(questions))

	  })
  }			
}  
 



