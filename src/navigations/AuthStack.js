import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import strings from '../localization/strings';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import ValidateCode from '../screens/ValidateCode';

const Stack = createStackNavigator();

export default function AuthStack({ route }) {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name={route.name}
        component={Login}
        options={{
          title: strings.login,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: strings.forgetPassword,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}