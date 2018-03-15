import uuidV4 from 'uuid/v4';
import ideasMock from '../../mockData/ideasMock';

export const REQUEST_IDEAS = 'REQUEST_IDEAS';
export const RECIEVE_IDEAS = 'RECIEVE_IDEAS';
export const REQUEST_NEW_IDEA = 'REQUEST_NEW_IDEA';
export const RECIEVE_NEW_IDEA = 'RECIEVE_NEW_IDEA';
export const UPDATE_IDEA = 'UPDATE_IDEA';
export const UPDATED_IDEA = 'UPDATED_IDEA';

const requestIdeas = () => ({
  type: REQUEST_IDEAS
});

const receiveIdeas = (ideasList) => ({
  type: RECIEVE_IDEAS,
  payload: ideasList
});

const requestNewIdea = () => ({
  type: REQUEST_NEW_IDEA
});

const receiveNewIdea = (newIdea) => ({
  type: RECIEVE_NEW_IDEA,
  payload: newIdea
});

const updateIdea = (id, title, body) => ({
  type: UPDATE_IDEA
});

const updatedIdea = (idea) => ({
  type: UPDATED_IDEA,
  payload: idea
});

const fetchIdeas = () => dispatch => {
  dispatch(requestIdeas());

  // Below is where the API GET request would normally be made
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

export const getIdeas = () => ( dispatch, getState ) => {
  if (getCachedIdeas(getState())) {
    return dispatch(fetchIdeas());
  }

  return null;
};

export const fetchNewIdea = () => dispatch => {
  dispatch(requestNewIdea());

  // Below is where the API GET request would normally be made
  // for the sake of the test I've created a UUID and a date
  // I would expect this to actually be in the response from
  // the service endpoint
  const mockIdeaData = {
    id: uuidV4(),
    created_date: Date.now()
  };

  return dispatch(receiveNewIdea(mockIdeaData))
}

export const postIdeaUpdate = (id, title, body) => dispatch => {
  // Below is where the API POST request would normally be made
  dispatch(updateIdea(id, title, body))

  // After the POST request responds I would fire off the
  // below dispatch using the reponse data
  return dispatch(updatedIdea({id, title, body}));
};
