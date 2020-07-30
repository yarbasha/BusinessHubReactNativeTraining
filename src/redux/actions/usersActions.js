import * as ActionTypes from '../ActionTypes';
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