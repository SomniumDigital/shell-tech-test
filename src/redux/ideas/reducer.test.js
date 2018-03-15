import {
  REQUEST_IDEAS,
  RECIEVE_IDEAS,
  REQUEST_NEW_IDEA,
  RECIEVE_NEW_IDEA,
  UPDATE_IDEA,
  UPDATED_IDEA
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
      recentNewIdea: null,
      posting: false
    });
  });

  describe('Request & Receive ideas', () => {
    it('returns \'fetching\' as true when requesting ideas', () => {
      const action = {
        type: REQUEST_IDEAS,
      }

      expect(ideasReducer(undefined, action)).toEqual({
        list: [],
        fetching: true,
        recentNewIdea: null,
        posting: false
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
        recentNewIdea: null,
        posting: false
      });
    });
  });

  describe('Request & Receive a new idea', () => {
    it('returns the correct data when requesting a new idea', () => {
      const action = {
        type: REQUEST_NEW_IDEA
      }

      expect(ideasReducer(undefined, action)).toEqual({
        list: [],
        fetching: true,
        recentNewIdea: null,
        posting: false
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
        fetching: false,
        posting: false
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
        recentNewIdea: '123ABC',
        posting: false
      });
    });
  });

  describe('Update an idea', () => {
    it('POSTs an update with the correct data', () => {
      const action = {
        type: UPDATE_IDEA,
        payload: {
          id: '123ABC',
          title: 'Test',
          body: 'Test idea'
        }
      }

      expect(ideasReducer(undefined, action)).toEqual({
        list: [],
        fetching: false,
        recentNewIdea: null,
        posting: true
      });
    });
  });

  describe('An Updated idea', () => {
    it('Receives a response with the correct data', () => {
      const initialState = {
        list: [
          {
            "id": "0001",
            "created_date": "1521025849202",
            "title": "First idea",
            "body": "This is the first idea"
          },
          {
            "id": "0002",
            "created_date": "1521025849202",
            "title": "Enter title",
            "body": "Enter idea"
          }
        ],
        fetching: false,
        posting: false,
        recentNewIdea: null
      };

      const action = {
        type: UPDATED_IDEA,
        payload: {
          id: '0002',
          title: 'Test',
          body: 'Test idea'
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
            "id": "0002",
            "created_date": "1521025849202",
            "title": "Test",
            "body": "Test idea"
          }
        ],
        fetching: false,
        recentNewIdea: null,
        posting: false
      });
    });
  });
});
