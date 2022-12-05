import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobSearchReducer from "../reducers/jobSearchReducer";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  favourites: mainReducer,
  jobs: jobSearchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
