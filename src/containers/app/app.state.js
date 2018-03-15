import { connect } from 'react-redux';
import {
  getIdeas,
  fetchNewIdea,
  postIdeaUpdate,
  removeIdea
} from '../../redux/ideas/actions';

export const mapStateToProps = state => state.ideas;

export const mapDispatchToProps = dispatch => ({
  requestIdeas: () => dispatch(getIdeas()),
  createNewIdea: () => dispatch(fetchNewIdea()),
  updateIdea: (id, title, body) => dispatch(postIdeaUpdate(id, title, body)),
  deleteIdea: (id) => dispatch(removeIdea(id))
});

export default connect(mapStateToProps, mapDispatchToProps);
