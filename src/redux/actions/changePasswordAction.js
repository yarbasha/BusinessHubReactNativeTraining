import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

export const changePassword = (values) => (dispatch) => {
  console.log("change password action")
  dispatch({ type: ActionTypes.CHANGE_PASSWORD_LOADING });
  fetch(pathUrl + "changePassword", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      if (response.status.toString().startsWith("2")) {
        return response.json();
      } else if (response.status.toString().startsWith("4")) {
        return response.json();
      } else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => {
      if (data.token) {
        dispatch({ type: ActionTypes.CHANGE_PASSWORD_SUCCESS, token: data.token, email: data.email });
      } else if (data.error) {
        dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: data.error })
      }
    })
    .catch(error => dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: error }));
};