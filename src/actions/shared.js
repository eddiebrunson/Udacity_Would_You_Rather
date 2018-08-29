import { getInitialData } from '../utils/api'
import { receiveUsers, handleUpdateUserAnswer } from '../actions/users'
import { receiveQuestions, handleAnswerQuestion } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
//onst AUTHED_ID = 'tylermcginnis'
//redux-thunk to make asychronous request
export function handleInitialData () {
return (dispatch) => {
dispatch(showLoading())
//returns a promise
return getInitialData()
.then(({ users, questions }) => {
dispatch(receiveUsers(users))
dispatch(receiveQuestions(questions))
//dispatch(setAuthedUser(AUTHED_ID))
dispatch(hideLoading())
})
}
}
export function handleQuestionVote (info){
return (dispatch) => {
dispatch(showLoading())
dispatch(handleUpdateUserAnswer(info))
dispatch(handleAnswerQuestion(info))
dispatch(hideLoading())
}
}