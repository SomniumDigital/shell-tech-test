import { connect } from 'react-redux';
import {
  getIdeas
} from '../../redux/ideas/actions';

export const mapStateToProps = ideas => ideas;

export const mapDispatchToProps = dispatch => ({
  requestIdeas: () => dispatch(getIdeas())
});

export default connect(mapStateToProps, mapDispatchToProps);
