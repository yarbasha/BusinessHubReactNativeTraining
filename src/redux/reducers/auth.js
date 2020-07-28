import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: false,
  user: {},
  loginErr: null,
  signupErr: null,
  forgetPasswordResponse: { success: null, error: null },
  validateCodeResponse: { userId: null, error: null },
  changePasswordResponse: { token: null, email: null, error: null },
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
      return { ...state, isLoading: true, forgetPasswordResponse: { error: null, success: null } };
    case ActionTypes.FORGET_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, forgetPasswordResponse: { error: null, success: action.success } };
    case ActionTypes.FORGET_PASSWORD_FAILED:
      return { ...state, isLoading: false, forgetPasswordResponse: { error: action.error, success: null } };
    case ActionTypes.VALIDATE_CODE_LOADING:
      return { ...state, isLoading: true, validateCodeResponse: { userId: null, error: null } };
    case ActionTypes.VALIDATE_CODE_SUCCESS:
      return { ...state, isLoading: false, validateCodeResponse: { userId: action.userId, error: null } };
    case ActionTypes.VALIDATE_CODE_FAILED:
      return { ...state, isLoading: false, validateCodeResponse: { userId: null, error: action.error } };
    case ActionTypes.CHANGE_PASSWORD_LOADING:
      return { ...state, isLoading: true, changePasswordResponse: { token: null, email: null, error: null } };
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, changePasswordResponse: { token: action.token, email: action.email, error: null } };
    case ActionTypes.CHANGE_PASSWORD_FAILED:
      return { ...state, isLoading: false, changePasswordResponse: { token: null, email: null, error: action.error } };
    case ActionTypes.SET_DEVICE_TOKEN:
      return { ...state, fcm: action.fcm };
    case ActionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        loginErr: null,
        signupErr: null,
        forgetPasswordResponse: { success: null, error: null },
        validateCodeResponse: { token: null, error: null },
        changePasswordResponse: { token: null, email: null, error: null }
      };
    default:
      return state;
  }
}