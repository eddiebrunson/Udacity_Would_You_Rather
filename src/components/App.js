import React, { Component } from 'react';
//import logo from './logo.svg';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
//import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App);
