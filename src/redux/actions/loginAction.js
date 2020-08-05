import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

export const loginUser = (values) => (dispatch, getState) => {

  dispatch({ type: ActionTypes.LOGIN_USER_LOADING });
  values.fcm = getState().auth.fcm;

  fetch(`${pathUrl}login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      else {
        dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: data });
      }
    })
    .catch(error => dispatch({ type: ActionTypes.LOGIN_USER_FAILED, error }));
};