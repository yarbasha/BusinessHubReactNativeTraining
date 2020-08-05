import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

export const validateCode = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.VALIDATE_CODE_LOADING });
  fetch(pathUrl + "validateCode", {
    method: "POST",
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
      if (data.userId) {
        dispatch({ type: ActionTypes.VALIDATE_CODE_SUCCESS, userId: data.userId });
      } else if (data.error) {
        dispatch({ type: ActionTypes.VALIDATE_CODE_FAILED, error: data.error });
      }
    })
    .catch(error => dispatch({ type: ActionTypes.VALIDATE_CODE_FAILED, error: error }));
};