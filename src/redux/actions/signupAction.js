import * as ActionTypes from '../ActionTypes';
import messaging from '@react-native-firebase/messaging';
import { pathUrl } from '../../config';

export const signupUser = (values) => async (dispatch) => {
  dispatch({ type: ActionTypes.SIGNUP_USER_LOADING });
  const fcm = await messaging().getToken();
  values.fcm = fcm;

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
        var error = new Error('Error' + data.status + ':' + data.statusText);
        error.response = data;
        throw error;
      }
      else {
        dispatch({ type: ActionTypes.SIGNUP_USER_SUCCESS, user: data })
      }
    })
    .catch(err => dispatch({ type: ActionTypes.SIGNUP_USER_FAILED, err }));
};