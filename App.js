/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { store, persistor } from './src/redux/store';
import Loading from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './src/navigations/Main';
import { SafeAreaView, StatusBar } from 'react-native';
import Background from './src/components/Background';
import colors from './src/styles/colors';



const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate onBeforeLift={() => SplashScreen.hide()} loading={<Loading />} persistor={persistor}>
          <NavigationContainer>
            <StatusBar backgroundColor={colors.primary} />
            <SafeAreaView style={{ flex: 1 }}>
              <Background>
                <Main />
              </Background>
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

