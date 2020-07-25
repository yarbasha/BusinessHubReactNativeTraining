import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import UsersStack from './UsersStack';
import { connect } from 'react-redux';
import { fetchFemaleUsers, fetchMaleUsers } from '../redux/actions/usersActions';
import strings from '../localization/strings';
import { globalStyles } from '../styles/styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../styles/colors';
import PaginationUsers from '../screens/PaginationUsers';

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
          options={{ tabBarIcon: ({ color }) => <Icon name="woman-outline" size={hp(2.5)} color={color} />, title: strings.femaleUsersScreenName }}
        />
        <Tab.Screen
          name="Male Users"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="man-outline" size={hp(2.5)} color={color} />, title: strings.maleUsersScreenName }}
        />
        <Tab.Screen
          name="Pagination Users"
          component={PaginationUsers}
          options={{ tabBarIcon: ({ color }) => <Icon name="people-outline" size={hp(2.5)} color={color} />, title: strings.users }}
        />
        <Tab.Screen
          name="Search"
          component={UsersStack}
          options={{ tabBarIcon: ({ color }) => <Icon name="search-outline" size={hp(2.5)} color={color} />, title: strings.search }}
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
