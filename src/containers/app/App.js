import React, { Component } from 'react';
import { compose } from 'redux';
import connectedState from './app.state';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.requestIdeas()
  }

  render() {
    return (
      <div className="App"></div>
    );
  }

}

export default compose(connectedState)(App);
export { App };
