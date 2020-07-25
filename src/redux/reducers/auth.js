import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: false,
  user: {},
  loginErr: null,
  signupErr: null,
  forgetPasswordMess: null,
  fcm: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return { ...state, isLoading: true, user: {}, loginErr: null };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, loginErr: null };
    case ActionTypes.LOGIN_USER_FAILED:
      return { ...state, isLoading: false, user: {}, loginErr: action.error };
    case ActionTypes.LOGOUT_USER:
      return { ...state, isLoading: false, user: {}, fcm: null };
    case ActionTypes.SIGNUP_USER_LOADING:
      return { ...state, isLoading: true, user: {}, signupErr: null };
    case ActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, signupErr: null };
    case ActionTypes.SIGNUP_USER_FAILED:
      return { ...state, isLoading: false, user: {}, signupErr: action.err };
    case ActionTypes.FORGET_PASSWORD_LOADING:
      return { ...state, isLoading: true, user: {}, forgetPasswordMess: null };
    case ActionTypes.FORGET_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, user: {}, forgetPasswordMess: action.success };
    case ActionTypes.FORGET_PASSWORD_FAILED:
      return { ...state, isLoading: false, user: {}, forgetPasswordMess: action.error };
    case ActionTypes.SET_DEVICE_TOKEN:
      return { ...state, fcm: action.fcm };
    case ActionTypes.CLEAR_AUTH_ERROR:
      return { ...state, loginErr: null, signupErr: null, forgetPasswordMess: null };
    default:
      return state;
  }
}