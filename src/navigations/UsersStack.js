import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../screens/Users';
import UserDetails from '../screens/UserDetails';
import strings from '../localization/strings';
import Background from '../components/Background';

const Stack = createStackNavigator();

export default function UsersStack({ route }) {
  let screenName;
  if (route.name == "Female Users") {
    screenName = strings.femaleUsersScreenName;
  }
  else if (route.name == "Male Users") {
    screenName = strings.maleUsersScreenName;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={route.name}
        component={Users}
        options={{
          title: screenName,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="User Details"
        component={UserDetails}
        options={{
          title: strings.userDetails,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}