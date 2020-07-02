import * as ActionTypes from '../ActionTypes';

export default function language(state = { lang: "ar" }, action) {
  switch (action.type) {
    case ActionTypes.LANGUAGE:
      return { lang: action.val };
    default:
      return state;
  }
}