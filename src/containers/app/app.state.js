import { connect } from 'react-redux';
import {
  getIdeas,
  fetchNewIdea
} from '../../redux/ideas/actions';

export const mapStateToProps = ideas => ideas;

export const mapDispatchToProps = dispatch => ({
  requestIdeas: () => dispatch(getIdeas()),
  createNewIdea: () => dispatch(fetchNewIdea())
});

export default connect(mapStateToProps, mapDispatchToProps);
