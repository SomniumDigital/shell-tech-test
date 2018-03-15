import React, { Component } from 'react';
import { compose } from 'redux';
import connectedState from './App.state';
import Ideas from '../../components/Ideas/Ideas';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editedIdea: {
        id: false
      }
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.props.requestIdeas()
  }

  toggleEdit(id, bool) {
    bool ? this.setState({ editedIdea: { id } }) : this.setState({ editedIdea: { id: bool } })
  }

  updateInput(inputName, inputValue, id) {
    this.setState({
      editedIdea: {
        [inputName]: inputValue,
        id
      }
    })
  }

  render() {
    const { list, recentNewIdea, updateIdea, deleteIdea } = this.props;
    return (
      <div className="App">
        <button type="button" onClick={this.props.createNewIdea}>
          Create new idea
        </button>
        {
          list && list.length ?
            <Ideas
              ideasList={list}
              focusedIdea={recentNewIdea}
              edit={this.state.edit}
              editHandler={this.toggleEdit}
              editedIdea={this.state.editedIdea}
              updateInput={this.updateInput}
              updateIdea={updateIdea}
              deleteIdea={deleteIdea}
            />
            : null
        }
      </div>
    );
  }

}

export default compose(connectedState)(App);
export { App };
