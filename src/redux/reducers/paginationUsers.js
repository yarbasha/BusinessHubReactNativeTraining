import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  page: 1,
  limit: 3,
  users: [],
  ended: false,
  err: {},
  isRefresh: false
};

export default function paginationUsers(state = initState, action) {
  switch (action.type) {
    case ActionTypes.PAGINATION_USERS_LOADING:
      return { ...state, isLoading: true, err: {} };
    case ActionTypes.PAGINATION_USERS_SUCCESS:
      return { ...state, isLoading: false, isRefresh: false, page: state.page + 1, users: [...state.users, ...action.data], err: {}, ended: action.ended }
    case ActionTypes.FETCH_MALE_USERS_FAILED:
      return { ...state, isLoading: false, err: action.err }
    case ActionTypes.REFRESH_PAGINATION_USERS:
      return { ...initState, isRefresh: true }
    default:
      return state;
  }
}