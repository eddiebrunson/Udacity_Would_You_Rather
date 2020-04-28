
import React, { Component, Fragment } from 'react'
import '../style/style.css'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import QuestionDetail from './QuestionDetail'
import PrivateRoute from './PrivateRoute'
import Error404 from './Error404'

class App extends Component {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

 /* } checkAuthedUser() {
    const { authedUser } = this.props
    return authedUser === null
      ? <Redirect to='/login' />
      : <div>
          <Nav />
          <Redirect to='/dashboard' />
        </div>
 }       */

  render() {

  /* const { loading } = this.props */
    return (
      <Router>
      <Fragment>

        <LoadingBar style={{ backgroundColor: 'blue' , height: '12px' }} />
      {/* Displaying content only if data is loaded */}
      
       {this.props.loading === true
       ? null : (
      
                  <Switch>
                    <Route path='/' exact component={Login} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/questions/:id' component={QuestionDetail} />
                    <PrivateRoute path='/add' component={AddQuestion} />
                    <PrivateRoute path='/leaderboard' component={LeaderBoard} />
                    <Route path='/error' component={Error404} />
                    <Route component={Error404} />
                </Switch>

      
      )}
      </Fragment>
      </Router>

   )   
    
  }
}

function mapStateToProps ({ loading, authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(App));
