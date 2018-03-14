import ideasMock from '../../mockData/ideasMock';

export const REQUEST_IDEAS = 'REQUEST_IDEAS';
export const RECIEVE_IDEAS = 'RECIEVE_IDEAS';

const requestIdeas = () => ({
  type: REQUEST_IDEAS
});

const receiveIdeas = (ideasList) => ({
  type: RECIEVE_IDEAS,
  payload: ideasList
});

const fetchIdeas = () => dispatch => {
  dispatch(requestIdeas());

  // Below is where the API request would normally be made
  // for the sake of the test I've created some mock mockData
  // to be returned instead
  return dispatch(receiveIdeas(ideasMock))
};

const getCachedIdeas = (state) => {
  if (!state.ideas.list.length) {
    return true;
  }

  if (state.ideas.fetching) {
    return false;
  }

  return false;
};

export const getIdeas = ( dispatch, getState ) => {
  if (getCachedIdeas(getState())) {
    return dispatch(fetchIdeas());
  }

  return null;
};
