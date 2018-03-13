import {
  getIdeas
} from './actions';

describe('Ideas actions', () => {
  describe('.getIdeas', () => {
    it('returns the action type as GET_IDEAS', () => {
      expect(getIdeas().type).toBe('GET_IDEAS');
    });

    it('returns the list of ideas in the payload', () => {
      const mockIdeasList = [
        'testIdea': {
          name: 'Test idea',
          test: 'Testing 1, 2, 3...'
        }
      ]

      expect(getIdeas(mockIdeasList).payload).toEqual([
        'testIdea': {
          name: 'Test idea',
          test: 'Testing 1, 2, 3...'
        }
      ]);
    });
  });
});
