import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ideas from './ideas/reducer'

const devTools = process.env.NODE_ENV === 'production' ?
  null : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default () => createStore(
  combineReducers({
    ideas
  }),
  devTools,
  applyMiddleware(thunk)
);
