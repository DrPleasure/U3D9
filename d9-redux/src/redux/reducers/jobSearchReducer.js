import { GET_JOBS } from "../actions";

const initialState = {
  // we're already in the "book" slice of the Redux store
  stock: [],
};

const jobSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
};

export default jobSearchReducer;
