import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  fcm: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return { ...state, isLoading: true, user: null, error: null };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, error: null };
    case ActionTypes.LOGIN_USER_FAILED:
      return { ...state, isLoading: false, user: null, error: action.error };
    case ActionTypes.LOGOUT_USER:
      return { ...state, isLoading: false, user: null };
    case ActionTypes.SIGNUP_USER_LOADING:
      return { ...state, isLoading: true, user: null, error: null };
    case ActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, error: null };
    case ActionTypes.SIGNUP_USER_FAILED:
      return { ...state, isLoading: false, user: null, error: action.error };
    case ActionTypes.SET_DEVICE_TOKEN:
      return { ...state, fcm: action.fcm };
    case ActionTypes.CLEAR_AUTH_ERROR:
      return { ...state, error: null, };
    default:
      return state;
  }
}