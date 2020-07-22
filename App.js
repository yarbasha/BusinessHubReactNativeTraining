/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { store, persistor } from './src/redux/store';
import Loading from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './src/navigations/Main';
import Test from './src/components/Test';
import { SafeAreaView } from 'react-native';
import Background from './src/components/Background';



const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate onBeforeLift={() => SplashScreen.hide()} loading={<Loading />} persistor={persistor}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <Background>
                <Main />
                {/* <Test /> */}
              </Background>
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

