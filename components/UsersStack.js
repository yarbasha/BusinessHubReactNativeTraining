import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from './Users';
import UserDetails from './UserDetails';
import Header from './Header';
import strings from '../localization/strings';

const Stack = createStackNavigator();

export default function UsersStack(props) {
  let screenName;
  if (props.route.name == "Female Users") {
    screenName = strings.femaleUsersScreenName;
  }
  else if (props.route.name == "Male Users") {
    screenName = strings.maleUsersScreenName;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={props.route.name}
        component={Users}
        options={{
          title: screenName,
          header: () => null
        }}
      />
      <Stack.Screen
        name="User Details"
        component={UserDetails}
        options={{
          title: strings.userDetails,
          header: () => null
        }}
      />
    </Stack.Navigator>
  )
}