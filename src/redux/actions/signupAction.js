import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

export const signupUser = (values) => (dispatch, getState) => {

  dispatch({ type: ActionTypes.SIGNUP_USER_LOADING });
  values.fcm = getState().auth.fcm;

  fetch(`${pathUrl}signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      else {
        dispatch({ type: ActionTypes.SIGNUP_USER_SUCCESS, user: data })
      }
    })
    .catch(error => dispatch({ type: ActionTypes.SIGNUP_USER_FAILED, error }));
};