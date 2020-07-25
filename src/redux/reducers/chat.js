import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  messages: [],
  users: [],
  error: null
};

export default function messages(state = initState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_MESSAGES_SUCCESS:
      return { isLoading: false, messages: action.messages, users: action.users, err: null };
    case ActionTypes.FETCH_MESSAGES_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case ActionTypes.SET_MESSAGE:
      return { ...state, messages: [action.message, ...state.messages] };
    default:
      return state;
  }
}