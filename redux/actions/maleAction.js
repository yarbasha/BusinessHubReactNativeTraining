import * as ActionTypes from '../ActionTypes';

export const fetchMaleUsers = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_MALE_USERS_LOADING, isLoading: true });
  return fetch("https://desolate-river-35422.herokuapp.com/male")
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => dispatch({ type: ActionTypes.FETCH_MALE_USERS_LOADING, data }))
    .catch(err => dispatch({ type: ActionTypes.FETCH_MALE_USERS_SUCCESS, err }));
};