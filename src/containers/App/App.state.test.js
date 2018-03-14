import {
  mapStateToProps,
  mapDispatchToProps
} from './App.state';
import {
  getIdeas,
  fetchNewIdea
} from '../../redux/ideas/actions';

describe('App.state', () => {
  describe('.mapStateToProps', () => {
    it('maps ideas data from the app state', () => {
      const mockState = {
        ideas: {
          list: [],
          fetching: false
        }
      };

      expect(mapStateToProps(mockState)).toEqual({
        list: [],
        fetching: false
      });
    });
  });

  describe('.mapDispatchToProps', () => {
    it('returns an object containing the correct props with funcs', () => {
      expect(mapDispatchToProps(jest.fn)).toEqual(
        expect.objectContaining({
          requestIdeas: expect.any(Function),
          createNewIdea: expect.any(Function)
        })
      );
    });

    describe('.requestIdeas', () => {
      it('calls the dispatcher with a function', () => {
        const dispatchSpy = jest.fn();
        const dispatcher = mapDispatchToProps(dispatchSpy).requestIdeas;

        dispatcher();
        expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Function));
      });
    });

    describe('.createNewIdea', () => {
      it('calls the dispatcher with a function', () => {
        const dispatchSpy = jest.fn();
        const dispatcher = mapDispatchToProps(dispatchSpy).createNewIdea;

        dispatcher();
        expect(dispatchSpy).toHaveBeenCalledWith(expect.any(Function));
      });
    });
  });
});
