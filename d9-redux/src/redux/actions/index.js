// let's manage all our actions here!
// best practise: instead of writing the actions manually every time,
// let's create some functions that return actions with dynamic payload:
// these are called "action creators functions"

// another best practise: define CONSTANTS for your action types!
export const ADD_TO_FAVES = "ADD_TO_FAVES";
export const REMOVE_FROM_FAVES = "REMOVE_FROM_FAVES";
export const GET_JOBS = "GET_JOBS";

// this is a function returning an action
// in Redux terminology, this is called an "action creator"
export const addToFavesAction = (companySelected) => {
  return {
    type: ADD_TO_FAVES,
    payload: companySelected, // most of the times,
    // you'll also need some data in your actions...
    // that's a job for a property commonly called 'payload'
  };
};

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_FAVES,
  payload: i,
});
// this is the same as before, just short-handed:
// a function returning an object

// addToCartAction(something) <-- this gives me the action!

export const getJobsAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    try {
      let resp = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=developer&limit=20"
      );
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs, // the reducer is just being given
          // the final result, the array of books! so it cannot fail :)
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
