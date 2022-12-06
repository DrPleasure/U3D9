// let's manage all our actions here!
// best practise: instead of writing the actions manually every time,
// let's create some functions that return actions with dynamic payload:
// these are called "action creators functions"

// another best practise: define CONSTANTS for your action types!
export const ADD_TO_FAVES = "ADD_TO_FAVES";
export const REMOVE_FROM_FAVES = "REMOVE_FROM_FAVES";
export const GET_JOBS = "GET_JOBS";
export const JOB_LOADING = "JOB_LOADING";
export const LOADING_ERROR = "LOADING_ERROR";

// this is a function returning an action
// in Redux terminology, this is called an "action creator"
export const addToFavesAction = (i) => {
  return {
    type: ADD_TO_FAVES,
    payload: i,
  };
};

export const removeFromFavesAction = (i) => ({
  type: REMOVE_FROM_FAVES,
  payload: i,
});

export const getJobsAction = (endPoint) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    try {
      setTimeout(() => {
        dispatch({
          type: JOB_LOADING,
          payload: true,
        });
      }, 100);
      let resp = await fetch(endPoint);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs.data, // the reducer is just being given
          // the final result, the array of books! so it cannot fail :)
        });
        setTimeout(() => {
          dispatch({
            type: JOB_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
