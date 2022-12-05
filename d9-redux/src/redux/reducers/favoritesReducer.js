// the reducer function is in charge of computing the new application state
// whenever an action gets dispatched

import { ADD_TO_FAVES, REMOVE_FROM_FAVES } from "../actions";

// the reducer is a PURE FUNCTION!
// - from the same input, always return the same output
// - this function will NEVER MUTATE ITS ARGUMENTS

// which pieces of info can the reducer function use for computing
// the new application state?
// 1) the current state
// 2) the action that just got dispatched

// just like when initializing a component's state you need to think
// about the initial values, that rule is also valid for inizializing the
// redux store!

const initialState = {
  favourites: {
    list: [],
  }, // we're going to put our books here!
};

// let's force the initialState to be the first value for the
// state argument in our reducer, using the default assignment operator =
const favoritesReducer = (state = initialState, action) => {
  // the goal of the reducer function is ALWAYS to RETURN the NEW STATE
  // of the application
  switch (action.type) {
    // multiple cases are going to be happening here, with time!
    // but now, just for starting, let's write just the default
    // so we can conclude this function and finish our store/index.js

    case ADD_TO_FAVES:
      // what are we going to do in every case?
      // we're going to return the new state of the app
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: [...state.favourites.list, action.payload],
        },
      };
    // state.cart.content.push() <-- VERY FORBIDDEN, MUTATES YOUR ARGUMENTS

    case REMOVE_FROM_FAVES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter((job, i) => {
            return i !== action.payload;
          }),
        },
      };

    default:
      return state;
    // in the case of an unknown action.type, don't break anything!
    // worst case scenario, return the current state without
    // modifying anything!
  }
};

export default favoritesReducer;
