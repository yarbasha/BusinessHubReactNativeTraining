import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UsersStack from './UsersStack';
import { connect } from 'react-redux';
import { fetchMaleUsers } from '../redux/actions/maleAction';
import { fetchFemaleUsers } from '../redux/actions/femaleAction';
import strings from '../localization/strings';
import AuthTabs from './AuthTabs';

const Tab = createBottomTabNavigator();

function Home(props) {
  useEffect(() => {
    props.fetchMaleUsers();
    props.fetchFemaleUsers();
  }, []);
  return (
    <>
      <Tab.Navigator initialRouteName="AuthTabs" tabBarOptions={{ activeTintColor: "#69a4d8", tabStyle: styles.container }}>
        <Tab.Screen
          name="Female Users"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="female" size={25} color={color} />, title: strings.femaleUsersScreenName }}
        />
        <Tab.Screen
          name="Male Users"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="male" size={25} color={color} />, title: strings.maleUsersScreenName }}
        />
        <Tab.Screen
          name="AuthTabs"
          component={AuthTabs}
          options={{ tabBarIcon: ({ color }) => <Icon name="info-circle" size={25} color={color} />, title: strings.info }}
        />
      </Tab.Navigator>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchMaleUsers: () => dispatch(fetchMaleUsers()),
  fetchFemaleUsers: () => dispatch(fetchFemaleUsers()),
  languageAction: (val) => dispatch(language(val))
});

const mapStateToProps = (state) => ({
  maleUsersState: state.maleUsers,
  femaleUsersState: state.femaleUsers,
  language: state.language.lang
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});