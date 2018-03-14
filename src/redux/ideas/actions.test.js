import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getIdeas,
  RECIEVE_IDEAS,
  REQUEST_IDEAS
} from './actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('Ideas actions', () => {
  describe('.getIdeas', () => {
    it('returns the list of ideas in the payload', () => {
      const mockInitialState = {
        ideas: {
            list: [],
            fetching: false
        }
      };
      const store = mockStore(mockInitialState);

      expect(getIdeas(store.dispatch, store.getState).payload).toEqual([
        {
          "body": "This is the first idea",
          "created_date": "1521025849202",
          "id": "0001",
          "title": "First idea"
        }
      ]);
    });

    it('returns the correct action type', () => {
      const mockInitialState = {
        ideas: {
            list: [],
            fetching: false
        }
      };
      const store = mockStore(mockInitialState);

      expect(getIdeas(store.dispatch, store.getState).type).toBe(RECIEVE_IDEAS);
    });

    it('returns \'null\' as the list of ideas are already in the state', () => {
      const mockInitialState = {
        ideas: {
            list: [{
              "body": "test idea"
            }],
            fetching: true
        }
      };
      const store = mockStore(mockInitialState);

      expect(getIdeas(store.dispatch, store.getState)).toBe(null);
    });
  });
});
