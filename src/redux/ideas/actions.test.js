import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getIdeas,
  fetchNewIdea,
  postIdeaUpdate,
  removeIdea,
  RECIEVE_IDEAS,
  RECIEVE_NEW_IDEA,
  UPDATED_IDEA,
  DELETED_IDEA
} from './actions';
import mockIdeas from '../../mockData/ideasMock'

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

      expect(getIdeas()(store.dispatch, store.getState).payload).toEqual([
        ...mockIdeas
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

      expect(getIdeas()(store.dispatch, store.getState).type).toBe(RECIEVE_IDEAS);
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

      expect(getIdeas()(store.dispatch, store.getState)).toBeNull();
    });
  });

  describe('.fetchNewIdea', () => {
    it('returns the correct data in the payload', () => {
      const store = mockStore({});

      expect(fetchNewIdea()(store.dispatch).payload).toEqual(expect.objectContaining({
        id: expect.any(String),
        created_date: expect.any(Number)
      }));
    });

    it('returns the correct action type', () => {
      const store = mockStore({});

      expect(fetchNewIdea()(store.dispatch).type).toBe(RECIEVE_NEW_IDEA);
    });
  });

  describe('.postIdeaUpdate', () => {
    it('returns the correct idea data in the payload', () => {
      const store = mockStore({});
      const mockId = 'ABC123';
      const mockTitle = 'Test';
      const mockBody = 'Test Body';

      expect(postIdeaUpdate(mockId, mockTitle, mockBody)(store.dispatch).payload).toEqual(expect.objectContaining({
        id: expect.stringMatching(mockId),
        title: expect.stringMatching(mockTitle),
        body: expect.stringMatching(mockBody)
      }));
    });

    it('returns the correct action type', () => {
      const store = mockStore({});
      const mockId = 'ABC123';
      const mockTitle = 'Test';
      const mockBody = 'Test Body';

      expect(postIdeaUpdate(mockId, mockTitle, mockBody)(store.dispatch).type).toBe(UPDATED_IDEA);
    });
  });

  describe('.removeIdea', () => {
    it('returns the correct idea id in the payload', () => {
      const store = mockStore({});
      const mockId = 'ABC123';

      expect(postIdeaUpdate(mockId)(store.dispatch).payload).toEqual(expect.objectContaining({
        id: expect.stringMatching(mockId)
      }));
    });

    it('returns the correct action type', () => {
      const store = mockStore({});
      const mockId = 'ABC123';

      expect(removeIdea(mockId)(store.dispatch).type).toBe(DELETED_IDEA);
    });
  });
});
