
import React, { Component, Fragment } from 'react'
import '../style/style.css'
import { connect } from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import QuestionDetail from './QuestionDetail'


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  checkAuthedUser() {
    const { authedUser } = this.props
    return authedUser === null
      ? <Redirect from='/' to='/login' />
      : <div>
          <Nav />
         
            <Redirect to='/dashboard' />
        </div>
  } 
  render() {
    const { loading } = this.props
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: 'blue', height: '12px' }}/>
        {/* Displaying content only if data is loaded */}
        { loading === 1
          ? null
          : <Fragment>
              {this.checkAuthedUser()}
              <Route
                exact path='/login'component={Login} /> 
              <Route
                exact path='/dashboard' component={Dashboard} />
              <Route
                exact path='/leaderBoard' component={LeaderBoard} />
              <Route
                exact path='/add' component={AddQuestion} />
              <Route
                exact path='/questions/:id' component={QuestionDetail} />
          </Fragment>}
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, loadingBar }) {
  return {
    loading: loadingBar.default,
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(App))