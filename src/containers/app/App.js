import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import connectedState from './App.state';
import Ideas from '../../components/Ideas/Ideas';
import './App.css';

class App extends PureComponent {
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
        <button type="button" onClick={this.props.createNewIdea} className="newIdeaBtn">
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

App.defaultProps = {
  list: [],
  recentNewIdea: null,
  fetching: false,
  posting: false,
  requestIdeas: () => {},
  createNewIdea: () => {},
  updateIdea: () => {},
  deleteIdea: () => {}
}

App.propTypes = {
  list: PropTypes.array.isRequired,
  recentNewIdea: PropTypes.string,
  fetching: PropTypes.bool,
  posting: PropTypes.bool,
  requestIdeas: PropTypes.func.isRequired,
  createNewIdea: PropTypes.func.isRequired,
  updateIdea: PropTypes.func.isRequired,
  deleteIdea: PropTypes.func.isRequired
}

export default compose(connectedState)(App);
export { App };
