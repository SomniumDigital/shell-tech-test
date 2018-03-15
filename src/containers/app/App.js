import React, { Component } from 'react';
import { compose } from 'redux';
import connectedState from './App.state';
import Ideas from '../../components/Ideas/Ideas';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editableIdeaId: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(id) {
    this.state.edit ? this.setState({ editableIdeaId: false }) : this.setState({ editableIdeaId: id })
  }

  componentDidMount() {
    this.props.requestIdeas()
  }

  render() {
    const { list, recentNewIdea } = this.props;
    return (
      <div className="App">
        <button type="button" onClick={this.props.createNewIdea}>
          Create new idea
        </button>
        {
          list && list.length ?
            <Ideas ideasList={list} focusedIdea={recentNewIdea} edit={this.state.edit} editHandler={this.toggleEdit} editableIdeaId={this.state.editableIdeaId}  />
            : null
        }
      </div>
    );
  }

}

export default compose(connectedState)(App);
export { App };
