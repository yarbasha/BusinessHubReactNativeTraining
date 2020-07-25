import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import maleUsers from './reducers/maleUsers';
import femaleUsers from './reducers/femaleUsers';
import language from './reducers/language';
import auth from './reducers/auth';
import foundUsers from './reducers/foundUsers';
import paginationUsers from './reducers/paginationUsers';
import chat from './reducers/chat';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';

let middleware = [thunk];

// if (__DEV__) {
//   middleware.push(logger);
// }

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['language', 'auth']
}

export const store = createStore(
  persistCombineReducers(persistConfig, {
    maleUsers,
    femaleUsers,
    language,
    auth,
    foundUsers,
    paginationUsers,
    chat
  }),
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export const persistor = persistStore(store);

