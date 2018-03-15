import {
  REQUEST_IDEAS,
  RECIEVE_IDEAS,
  REQUEST_NEW_IDEA,
  RECIEVE_NEW_IDEA
} from './actions';
import ideasReducer from './reducer';

describe('Ideas reducer', () => {
  it('returns the default state', () => {
    const invalidAction = {
      type: 'Invalid',
      payload: {}
    };

    expect(ideasReducer(undefined, invalidAction)).toEqual({
      list: [],
      fetching: false,
      recentNewIdea: null
    });
  });

  it('returns \'fetching\' as true when requesting ideas', () => {
    const action = {
      type: REQUEST_IDEAS,
    }

    expect(ideasReducer(undefined, action)).toEqual({
      list: [],
      fetching: true,
      recentNewIdea: null
    });
  });

  it('returns the correct data when receiving ideas', () => {
    const action = {
      type: RECIEVE_IDEAS,
      payload: [
        {'test': 'test'}
      ]
    }

    expect(ideasReducer(undefined, action)).toEqual({
      list: [
        {'test': 'test'}
      ],
      fetching: false,
      recentNewIdea: null
    });
  });

  it('returns the correct data when requesting a new idea', () => {
    const action = {
      type: REQUEST_NEW_IDEA
    }

    expect(ideasReducer(undefined, action)).toEqual({
      list: [],
      fetching: true,
      recentNewIdea: null
    });
  });

  it('updates the state correctly when receiving a new idea', () => {
    const initialState = {
      list: [
        {
          "id": "0001",
          "created_date": "1521025849202",
          "title": "First idea",
          "body": "This is the first idea"
        }
      ],
      fetching: false
    };

    const action = {
      type: RECIEVE_NEW_IDEA,
      payload: {
        id: '123ABC',
        created_date: '12345'
      }
    }

    expect(ideasReducer(initialState, action)).toEqual({
      list: [
        {
          "id": "0001",
          "created_date": "1521025849202",
          "title": "First idea",
          "body": "This is the first idea"
        },
        {
          id: '123ABC',
          created_date: '12345'
        },
      ],
      fetching: false,
      recentNewIdea: '123ABC'
    });
  });
});
