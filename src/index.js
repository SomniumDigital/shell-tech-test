import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/app/App';
import reduxStore from './redux/store';

render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
