import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Button } from 'react-native';
import Card from './Card';
import Loading from './Loading';
import { fetchMaleUsers, fetchFemaleUsers, findUsers } from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import strings from '../localization/strings';
import { language } from '../redux/actions/languageAction';
import Header from './Header';

function Users(props) {

  let isLoading = true;
  let users;
  let isItSearch = false;
  let headerTitle;
  let isItUsers = false;

  if (props.route.name == "Female Users") {
    users = props.femaleUsersState.users;
    isLoading = props.femaleUsersState.isLoading;
    headerTitle = strings.femaleUsersScreenName;
    isItUsers = true;
  }
  else if (props.route.name == "Male Users") {
    users = props.maleUsersState.users;
    isLoading = props.maleUsersState.isLoading;
    headerTitle = strings.maleUsersScreenName;
    isItUsers = true;
  }
  else if (props.route.name == "Search") {
    if (props.foundUsersState) {
      console.log("if")
      users = props.foundUsersState.users;
      isLoading = props.foundUsersState.isLoading;
    } else {
      console.log("else")
      users = [];
      isLoading = false;
    }
    isItSearch = true;
  }

  const handleInput = (name) => {
    props.fetchUsers(name);
  }

  return (
    < View style={{ flex: 1 }}>
      {isItSearch && <Header title={strings.search} isSearch={true} handleInput={handleInput} />
      }
      {isLoading ? <Loading /> :
        <>
          {isItUsers && <Header title={headerTitle} />}
          <View style={{ flex: 1 }}>
            <FlatList
              data={users}
              ListEmptyComponent={() => <Card user={null} />}
              renderItem={({ item }) => <Card user={item} />}
              keyExtractor={(item, index) => String(index)}
              style={{ flex: 1 }}
            />
          </View>
        </>}
    </View >
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMaleUsers: () => dispatch(fetchMaleUsers()),
  fetchFemaleUsers: () => dispatch(fetchFemaleUsers()),
  languageAction: (val) => dispatch(language(val)),
  fetchUsers: (name) => dispatch(findUsers(name))
});

const mapStateToProps = (state) => ({
  maleUsersState: state.maleUsers,
  femaleUsersState: state.femaleUsers,
  language: state.language.lang,
  foundUsersState: state.foundUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);