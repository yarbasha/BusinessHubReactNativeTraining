import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import strings from '../localization/strings';
import Login from './Login';
import Signup from './Signup';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialTopTabNavigator();

export default function AuthTabs() {
  return (
    <>
      <Tab.Navigator tabBarOptions={{ activeTintColor: "#69a4d8", tabStyle: styles.container, showIcon: true, iconStyle: { height: 10 } }}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ title: strings.login, tabBarIcon: ({ color }) => <Icon name="sign-in" size={15} color={color} /> }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{ title: strings.signup, tabBarIcon: ({ color }) => <Icon name="user-plus" size={15} color={color} /> }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});