import * as ActionTypes from '../ActionTypes';
import messaging from '@react-native-firebase/messaging';
import { pathUrl } from '../../config';

export const fetchFemaleUsers = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_LOADING });
  fetch(`${pathUrl}female`)
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_SUCCESS, data }))
    .catch(err => dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_FAILED, err }));
};

export const fetchMaleUsers = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_MALE_USERS_LOADING });
  fetch(`${pathUrl}male`)
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => dispatch({ type: ActionTypes.FETCH_MALE_USERS_SUCCESS, data }))
    .catch(err => dispatch({ type: ActionTypes.FETCH_MALE_USERS_FAILED, err }));
};

export const findUsers = (name) => (dispatch) => {
  dispatch({ type: ActionTypes.FIND_USERS_LOADING });
  fetch(`${pathUrl}search?name=${name}`)
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => {
      if (data.error) {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      } else {
        dispatch({ type: ActionTypes.FIND_USERS_SUCCESS, data })
      }
    })
    .catch(err => dispatch({ type: ActionTypes.FIND_USERS_FAILED, err }));
};

export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_USER_LOADING });
  const fcm = await messaging().getToken();
  values.fcm = fcm;

  fetch(`${pathUrl}login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then(response => response.json())
    .then(data => {
      if (data.error) {
        var error = new Error('Error' + data.status + ':' + data.statusText);
        error.response = data;
        throw error;
      }
      else {
        dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: data });
        dispatch({ type: ActionTypes.SET_DEVICE_TOKEN, fcm });
      }
    })
    .catch(error => dispatch({ type: ActionTypes.LOGIN_USER_FAILED, error }));
};

export const logout = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT_USER });
};

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

export const paginationUsers = (page, limit) => (dispatch) => {
  dispatch({ type: ActionTypes.PAGINATION_USERS_LOADING });
  fetch(`${pathUrl}getProfiles?page=${page}&limit=${limit}`)
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => {
      if (data.users.length > 0)
        dispatch({ type: ActionTypes.PAGINATION_USERS_SUCCESS, data: data.users, ended: false });
      else
        dispatch({ type: ActionTypes.PAGINATION_USERS_SUCCESS, data: data.users, ended: true });
    })
    .catch(err => dispatch({ type: ActionTypes.PAGINATION_USERS_FAILED, err }));
};

export const refreshPaginationUsers = () => ({
  type: ActionTypes.REFRESH_PAGINATION_USERS
});

export const validateCode = (values) => (dispatch) => {
  console.log("validate code action")
  dispatch({ type: ActionTypes.VALIDATE_CODE_LOADING });
  fetch(pathUrl + "validateCode", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      console.log("response -> ", response)
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
      console.log("data -> ", data)
      if (data.userId) {
        dispatch({ type: ActionTypes.VALIDATE_CODE_SUCCESS, userId: data.userId });
      } else if (data.error) {
        dispatch({ type: ActionTypes.VALIDATE_CODE_FAILED, error: data.error });
      }
    })
    .catch(error => dispatch({ type: ActionTypes.VALIDATE_CODE_FAILED, error: error }))
};

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
      console.log("response -> ", response)
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
      console.log("data -> ", data)
      if (data.token) {
        dispatch({ type: ActionTypes.CHANGE_PASSWORD_SUCCESS, token: data.token, email: data.email });
      } else if (data.error) {
        dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: data.error })
      }
    })
    .catch(error => dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: error }));
};