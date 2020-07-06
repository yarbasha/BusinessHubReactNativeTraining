import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: true,
  users: [],
  err: {}
};

export default function femaleUsers(state = initState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_FEMALE_USERS_LOADING:
      return { isLoading: true, users: [], err: {} };
    case ActionTypes.FETCH_FEMALE_USERS_SUCCESS:
      return { isLoading: false, users: action.data, err: {} }
    case ActionTypes.FETCH_FEMALE_USERS_FAILED:
      return { isLoading: false, users: [], err: action.err }
    default:
      return state;
  }
}