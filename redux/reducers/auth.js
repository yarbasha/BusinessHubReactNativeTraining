import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: false,
  user: {},
  loginErr: {},
  signupErr: {},
  forgetPasswordMess: ""
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return { ...state, isLoading: true, user: {}, loginErr: {} };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, loginErr: {} };
    case ActionTypes.LOGIN_USER_FAILED:
      return { ...state, isLoading: false, user: {}, loginErr: action.err };
    case ActionTypes.LOGOUT_USER:
      return { ...state, isLoading: false, user: {} };
    case ActionTypes.SIGNUP_USER_LOADING:
      return { ...state, isLoading: true, user: {}, signupErr: {} };
    case ActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.user, signupErr: {} };
    case ActionTypes.SIGNUP_USER_FAILED:
      return { ...state, isLoading: false, user: {}, signupErr: action.err };
    case ActionTypes.FORGET_PASSWORD_LOADING:
      return { ...state, isLoading: true, user: {}, forgetPasswordMess: "" };
    case ActionTypes.FORGET_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, user: {}, forgetPasswordMess: action.success };
    case ActionTypes.FORGET_PASSWORD_FAILED:
      return { ...state, isLoading: false, user: {}, forgetPasswordMess: action.error };
    default:
      return state;
  }
}