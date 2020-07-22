import * as ActionTypes from '../ActionTypes';
import { getLocales } from 'react-native-localize';

export default function language(state = { lang: getLocales()[0].languageCode }, action) {
  switch (action.type) {
    case ActionTypes.LANGUAGE:
      return { lang: action.val };
    default:
      return state;
  }
}