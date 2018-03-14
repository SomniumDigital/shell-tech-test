import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const mockRequestIdeas = jest.fn()
  const div = document.createElement('div');
  ReactDOM.render(
    <App requestIdeas={mockRequestIdeas} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
