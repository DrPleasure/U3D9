import { GET_JOBS, JOB_LOADING, LOADING_ERROR } from "../actions";

const initialState = {
  // we're already in the "book" slice of the Redux store
  jobs: [],
  isLoading: false,
  isError: false,
};

const jobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case JOB_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOADING_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default jobSearchReducer;
