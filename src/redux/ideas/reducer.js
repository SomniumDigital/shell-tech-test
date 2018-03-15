import {
  REQUEST_IDEAS,
  RECIEVE_IDEAS,
  REQUEST_NEW_IDEA,
  RECIEVE_NEW_IDEA
} from './actions';

const initialState = {
  list: [],
  fetching: false,
  recentNewIdea: null
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
        list: action.payload
      }
    }

    case REQUEST_NEW_IDEA: {
      return {
        ...state,
        fetching: true,
      }
    }

    case RECIEVE_NEW_IDEA: {
      const { id, created_date } = action.payload;
      const newIdea = { id, created_date };
      return {
        ...state,
        list: [ ...state.list, {...newIdea} ],
        recentNewIdea: id
      }
    }

    default:
      return state;
  }
};
