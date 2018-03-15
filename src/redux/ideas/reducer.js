import {
  REQUEST_IDEAS,
  RECIEVE_IDEAS,
  REQUEST_NEW_IDEA,
  RECIEVE_NEW_IDEA,
  UPDATE_IDEA,
  UPDATED_IDEA
} from './actions';

const initialState = {
  list: [],
  fetching: false,
  posting: false,
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

    case UPDATE_IDEA:{
      return {
        ...state,
        posting: true
      }
    }

    case UPDATED_IDEA:{
      const {id, title, body} = action.payload;
      const list = state.list.map(idea => {
        if (id === idea.id) {
          return {
            id,
            title,
            body,
            created_date: idea.created_date
          };
        }

        return idea;
      })
      return {
        ...state,
        list
      }
    }

    default:
      return state;
  }
};
