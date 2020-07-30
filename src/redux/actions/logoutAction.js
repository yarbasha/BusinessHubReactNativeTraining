import { LOGOUT_USER } from '../ActionTypes';

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};