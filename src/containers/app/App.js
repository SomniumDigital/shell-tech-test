import React, { Component } from 'react';
import { compose } from 'redux';
import connectedState from './App.state';
import Ideas from '../../components/Ideas/Ideas';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.requestIdeas()
  }

  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <button type="button" onClick={this.props.createNewIdea}>
          Create new idea
        </button>
        {
          list && list.length ?
            <Ideas ideasList={list} />
            : null
        }
      </div>
    );
  }

}

export default compose(connectedState)(App);
export { App };
