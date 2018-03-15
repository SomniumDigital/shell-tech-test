import { connect } from 'react-redux';
import {
  getIdeas,
  fetchNewIdea,
  postIdeaUpdate
} from '../../redux/ideas/actions';

export const mapStateToProps = state => state.ideas;

export const mapDispatchToProps = dispatch => ({
  requestIdeas: () => dispatch(getIdeas()),
  createNewIdea: () => dispatch(fetchNewIdea()),
  updateIdea: (id, title, body) => dispatch(postIdeaUpdate(id, title, body))
});

export default connect(mapStateToProps, mapDispatchToProps);
