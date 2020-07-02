/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import strings from './localization/strings';
import { AsyncStorage } from 'react-native';
import Loading from './components/Loading';
import { language } from './redux/actions/languageAction';

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
        <Provider store={store}>
          <View style={styles.container}>
            <Users />
          </View>
        </Provider>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcdee8',
    padding: 6,
  }
});

export default App;
