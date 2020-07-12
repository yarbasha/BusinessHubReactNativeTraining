import * as ActionTypes from '../ActionTypes';

export const fetchFemaleUsers = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_FEMALE_USERS_LOADING });
  fetch("https://desolate-river-35422.herokuapp.com/female")
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
  fetch("https://desolate-river-35422.herokuapp.com/male")
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
  dispatch({ type: ActionTypes.FETCH_USERS_LOADING });
  fetch("https://desolate-river-35422.herokuapp.com/search?name=" + name)
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
        dispatch({ type: ActionTypes.FETCH_USERS_SUCCESS, data })
      }
    })
    .catch(err => dispatch({ type: ActionTypes.FETCH_USERS_FAILED, err }));
};

export const loginUser = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_USER_LOADING });
  fetch("https://desolate-river-35422.herokuapp.com/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
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
        var error = new Error('Error' + data.status + ':' + data.statusText);
        error.response = data;
        throw error;
      }
      else {
        dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: data })
      }
    })
    .catch(err => dispatch({ type: ActionTypes.LOGIN_USER_FAILED, err }));
};

export const logout = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT_USER });
};

export const signupUser = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGNUP_USER_LOADING });
  fetch("https://desolate-river-35422.herokuapp.com/signup", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
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
  fetch("https://desolate-river-35422.herokuapp.com/forgotpassword", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => {
      console.log(data)
      if (data.error.length > 13) {
        var err = new Error(data.error);
        throw err;
      }
      else {
        dispatch({ type: ActionTypes.FORGET_PASSWORD_SUCCESS, success: data });
      }
    })
    .catch(err => dispatch({ type: ActionTypes.FORGET_PASSWORD_FAILED, error: err.message }));
}