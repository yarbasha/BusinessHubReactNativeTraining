import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  users: [],
  err: {}
};

export default function maleUsers(state = initState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MALE_USERS_LOADING:
      return { isLoading: true, users: [], err: {} };
    case ActionTypes.FETCH_MALE_USERS_SUCCESS:
      return { isLoading: false, users: action.data, err: {} }
    case ActionTypes.FETCH_MALE_USERS_FAILED:
      return { isLoading: false, users: [], err: action.err }
    default:
      return state;
  }
}