import * as ActionTypes from '../ActionTypes';

export const fetchFemaleUsers = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_LOADING, isLoading: true });
  return fetch("https://desolate-river-35422.herokuapp.com/female")
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_SUCCESS, data }))
    .catch(err => dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_SUCCESS, err }));
};
