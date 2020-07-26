/**
 * @format
 */
import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import { name as appName } from './app.json';
import { yupToFormErrors } from 'formik';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => HeadlessCheck);
