import {
  REQUEST_IDEAS,
  RECIEVE_IDEAS,
  REQUEST_NEW_IDEA,
  RECIEVE_NEW_IDEA
} from './actions';

const initialState = {
  ideasList: [],
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IDEAS: {
      return {
        ...state,
        fetching: true,
      }
    }

    case RECIEVE_IDEAS: {
      return {
        ...state,
        ideasList: action.payload
      }
    }

    case REQUEST_NEW_IDEA: {
      return {
        ...state
      }
    }

    case RECIEVE_NEW_IDEA: {
      console.log(state.ideasList);
      const { id, created_date } = action.payload;
      const newIdea = { id, created_date };
      return {
        ...state,
        ideasList: [ ...state.ideasList, {...newIdea} ]
      }
    }

    default:
      return state;
  }
};
