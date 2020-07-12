/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { store, persistor } from './redux/store';
import Loading from './components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './components/Main';
import Test from './components/Test';


const App: () => React$Node = () => {

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate onBeforeLift={() => SplashScreen.hide()} loading={<Loading />} persistor={persistor}>
            <Main />
            {/* <Test /> */}
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

