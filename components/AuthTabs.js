import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import strings from '../localization/strings';
import Signup from './Signup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthStack from './AuthStack';
import { globalStyles } from '../src/styles/styles';

const Tab = createBottomTabNavigator();

export default function AuthTabs() {
  return (
    <>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarPosition="bottom"
        tabBarOptions={{
          activeTintColor: "#69a4d8",
          tabStyle: globalStyles.tabContainer,
          keyboardHidesTabBar: true,
          showIcon: true,
          iconStyle: { height: hp(2.3) },
          labelStyle: { fontSize: hp(1.8) },
          style: { height: hp(7.5), justifyContent: "center" }
        }}
      >
        <Tab.Screen
          name="Login"
          component={AuthStack}
          options={{
            title: strings.login,
            tabBarIcon: ({ color }) => <Icon name="sign-in" size={hp(2.3)} color={color} />
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            title: strings.signup,
            tabBarIcon: ({ color }) => <Icon name="user-plus" size={hp(2.3)} color={color} />
          }}
        />
      </Tab.Navigator>
    </>
  );
}