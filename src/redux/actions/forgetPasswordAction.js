import * as ActionTypes from '../ActionTypes';
import messaging from '@react-native-firebase/messaging';
import { pathUrl } from '../../config';

export const forgetPassword = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.FORGET_PASSWORD_LOADING });
  fetch(pathUrl + "forgotpassword", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      if (response.ok) return response.json();
      else throw response.json();
    })
    .then(data => {
      dispatch({ type: ActionTypes.FORGET_PASSWORD_SUCCESS, success: data.error });
    })
    .catch(async (err) => {
      const error = await err;
      dispatch({ type: ActionTypes.FORGET_PASSWORD_FAILED, error: error.error })
    })
};