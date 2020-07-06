/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import strings from './localization/strings';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './components/Loading';
import { language } from './redux/actions/languageAction';
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/Main';
import Test from './components/Test';

const App: () => React$Node = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("defaultLanguage")
      .then(val => {
        if (val) {
          AsyncStorage.setItem("defaultLanguage", val);
          strings.setLanguage(val);
          store.dispatch(language(val));
          setIsLoading(false);
        }
        else {
          strings.setLanguage("ar");
          store.dispatch(language("ar"));
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) {
    return <Loading />
  }
  else {
    return (
      <>
        <NavigationContainer>
          <Provider store={store}>
            <Main />
            {/* <Test /> */}
          </Provider>
        </NavigationContainer>
      </>
    );
  }
};

export default App;

