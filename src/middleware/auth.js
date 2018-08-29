import { SET_AUTHED_USER } from '../actions/authedUser'

const auth = (store) => (next) => (action) => {
  if ( action.type === SET_AUTHED_USER ) {
    let passwords = []
    passwords[0] = "Udacity"
    let password = prompt("Enter your password, please.")
    if (passwords.indexOf(password) === -1) {
      alert("Invaild please try again!")
      return store
    }
  }
  return next(action)
}
export default auth