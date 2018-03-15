import React  from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EditableIdea from './EditableIdea';

configure({ adapter: new Adapter() });

describe('Component: EditableIdea', () => {
  it('renders correctly (with inputs)', () => {
    const component = shallow(
      <EditableIdea
        idea={{
          id: 'ABC123',
          title: 'Test',
          body: 'Test body'
        }}
        edit={false}
        editIdea={jest.fn()}
        editableIdeaId={'ABC123'}
        focusedIdea={null}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly (without inputs)', () => {
    const component = shallow(
      <EditableIdea
        idea={{
          id: 'ABC123',
          title: 'Test',
          body: 'Test body'
        }}
        edit={false}
        editIdea={jest.fn()}
        editableIdeaId={false}
        focusedIdea={null}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
