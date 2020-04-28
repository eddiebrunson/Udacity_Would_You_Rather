import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import User from './User.js'

class Login extends React.Component {
   state = {
        username: '',
        isLogged: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {username} = this.state
        const {dispatch} = this.props

        if (username !== "") {
            dispatch(User(username))
            this.setState(() => ({isLogged: false}))
        }
    }
    handleChange = (e) => {
        const username = e.target.value
        e.preventDefault();
        this.setState(() => ({username}))
    }

  render() {
    const { usersIds } = this.props
    const { from } = this.props.location.state || {
      from: { pathname: '/home' }
    };
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={from} />;
    }

    return (
      <div className='login'>
        <h1>Pick your avatar, please!</h1>
        <h2>There is Horsae, Bevy Bev, and Mark-E please select one!</h2>
        <ul>
          {usersIds.map(id =>
          (<li key={id}>
            {<User id={id} />}
          </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)