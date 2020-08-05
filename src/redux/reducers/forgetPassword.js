import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: false,
  forgetPasswordResponse: {},
  validateCodeResponse: {},
  changePasswordResponse: {}
}

export default function forgetPassword(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FORGET_PASSWORD_LOADING:
      return { ...state, isLoading: true, forgetPasswordResponse: {} };
    case ActionTypes.FORGET_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, forgetPasswordResponse: { success: action.success } };
    case ActionTypes.FORGET_PASSWORD_FAILED:
      return { ...state, isLoading: false, forgetPasswordResponse: { error: action.error } };
    case ActionTypes.VALIDATE_CODE_LOADING:
      return { ...state, isLoading: true, validateCodeResponse: {} };
    case ActionTypes.VALIDATE_CODE_SUCCESS:
      return { ...state, isLoading: false, validateCodeResponse: { userId: action.userId } };
    case ActionTypes.VALIDATE_CODE_FAILED:
      return { ...state, isLoading: false, validateCodeResponse: { error: action.error } };
    case ActionTypes.CHANGE_PASSWORD_LOADING:
      return { ...state, isLoading: true, changePasswordResponse: {} };
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, changePasswordResponse: { token: action.token, email: action.email } };
    case ActionTypes.CHANGE_PASSWORD_FAILED:
      return { ...state, isLoading: false, changePasswordResponse: { error: action.error } };
    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        forgetPasswordResponse: {},
        validateCodeResponse: {},
        changePasswordResponse: {}
      };
    default:
      return state;
  }
}