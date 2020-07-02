import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import maleUsers from './reducers/maleUsers';
import femaleUsers from './reducers/femaleUsers';
import language from './reducers/language';

let middleware = [thunk];

// if (__DEV__) {
//   middleware.push(logger);
// }
const store = createStore(
  combineReducers({
    maleUsers,
    femaleUsers,
    language
  }),
  applyMiddleware(...middleware)
);

export default store;