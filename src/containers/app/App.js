import React, { Component } from 'react';
import { compose } from 'redux';
import connectedState from './app.state';
import Ideas from '../../components/Ideas/Ideas';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.requestIdeas()
  }

  render() {
    const { ideas } = this.props;
    return (
      <div className="App">
        <button type="button" onClick={this.props.createNewIdea}>
          Create new idea
        </button>
        {
          ideas && ideas.list ?
            <Ideas ideasList={ideas.list} />
            : null
        }
      </div>
    );
  }

}

export default compose(connectedState)(App);
export { App };
