import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

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