import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import strings from '../../localization/strings';
import Signup from '../../screens/Signup';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthStack from '../AuthStack';
import { styles } from './styles';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function AuthTabs() {
  return (
    <>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarPosition="bottom"
        tabBarOptions={{
          activeTintColor: colors.primary,
          tabStyle: styles.tabContainer,
          keyboardHidesTabBar: true,
          showIcon: true,
          iconStyle: styles.iconStyle,
          labelStyle: styles.labelStyle,
          style: styles.tabBarStyle,
          labelPosition: "below-icon"
        }}
      >
        <Tab.Screen
          name="Login"
          component={AuthStack}
          options={{
            title: strings.login,
            unmountOnBlur: true,
            tabBarIcon: ({ color }) => <Icon name="log-in-outline" size={hp(3)} color={color} />
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            title: strings.signup,
            unmountOnBlur: true,
            tabBarIcon: ({ color }) => <Icon name="person-add-outline" size={hp(3)} color={color} />
          }}
        />
      </Tab.Navigator>
    </>
  );
}