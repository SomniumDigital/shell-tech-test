export const GET_IDEAS = 'GET_IDEAS';

export const getIdeas = ideasList => ({
  type: GET_IDEAS,
  payload: ideasList
});
