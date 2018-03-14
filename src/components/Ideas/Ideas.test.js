import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Ideas from './Ideas';

configure({ adapter: new Adapter() });

describe('Component: Ideas', () => {
  it('renders correctly', () => {
    const ideasListData = [{
      id: '123ABC',
      title: 'Test title',
      body: 'This is a test'
    }]
    const component = shallow(
      <Ideas
        ideasList={ideasListData}
      />
    )
    expect(component).toMatchSnapshot();
  });
});
