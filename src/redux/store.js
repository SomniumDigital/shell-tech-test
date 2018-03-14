import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ideas from './ideas/reducer'

export default () => createStore(
  combineReducers({
    ideas
  }),
  applyMiddleware(thunk)
);
