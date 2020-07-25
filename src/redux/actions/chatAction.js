import * as ActionTypes from '../ActionTypes';
import { pathUrl } from '../../config';

export const fetchMessages = () => (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_MESSAGES_LOADING });
  fetch(`${pathUrl}allMessages?page=1&limit=2&name=12`)
    .then(response => {
      if (response.ok) return response.json();
      else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(data => {
      const users = data.rooms[0].users;
      const messages = data.rooms[0].messages.reverse();
      dispatch({ type: ActionTypes.FETCH_MESSAGES_SUCCESS, messages, users })
    })
    .catch(error => dispatch({ type: ActionTypes.FETCH_MESSAGES_FAILED, error }));
};