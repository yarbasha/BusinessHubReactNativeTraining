import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UsersStack from './UsersStack';
import { connect } from 'react-redux';
import { fetchFemaleUsers, fetchMaleUsers } from '../redux/actions/usersActions';
import strings from '../localization/strings';
import { globalStyles } from '../src/styles/styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../src/styles/colors';

const Tab = createBottomTabNavigator();

function Home(props) {
  useEffect(() => {
    props.fetchMaleUsers();
    props.fetchFemaleUsers();
  }, []);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Female Users"
        tabBarOptions={{
          activeTintColor: colors.primary,
          tabStyle: globalStyles.tabContainer,
          keyboardHidesTabBar: true,
          labelPosition: "below-icon",
          labelStyle: { fontSize: hp(1.7) },
          style: { height: hp(5.8) }
        }}
      >
        <Tab.Screen
          name="Female Users"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="female" size={hp(2.5)} color={color} />, title: strings.femaleUsersScreenName }}
        />
        <Tab.Screen
          name="Male Users"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="male" size={hp(2.5)} color={color} />, title: strings.maleUsersScreenName }}
        />
        <Tab.Screen
          name="Search"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="search" size={hp(2.5)} color={color} />, title: strings.search }}
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
