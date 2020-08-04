import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { fetchMaleUsers, fetchFemaleUsers, findUsers } from '../../redux/actions/usersActions';
import { connect } from 'react-redux';
import strings from '../../localization/strings';
import { language } from '../../redux/actions/languageAction';
import Header from '../../components/Header';
import { useRoute } from '@react-navigation/native';
import Background from '../../components/Background';

function Users(props) {
  const route = useRoute();
  let isLoading = true;
  let users;
  let isItSearch = false;
  let headerTitle;
  let isItUsers = false;

  if (route.name == "Female Users") {
    users = props.femaleUsersState.users;
    isLoading = props.femaleUsersState.isLoading;
    headerTitle = strings.femaleUsersScreenName;
    isItUsers = true;
  }
  else if (route.name == "Male Users") {
    users = props.maleUsersState.users;
    isLoading = props.maleUsersState.isLoading;
    headerTitle = strings.maleUsersScreenName;
    isItUsers = true;
  }
  else if (route.name == "Search") {
    if (props.foundUsersState.users.length > 0) {
      users = props.foundUsersState.users;
      isLoading = props.foundUsersState.isLoading;
    } else {
      users = [];
      isLoading = props.foundUsersState.isLoading;
    }
    isItSearch = true;
  }

  const refetchUsers = () => {
    if (route.name == "Female Users") {
      props.fetchFemaleUsers();
    } else if (route.name == "Male Users") {
      props.fetchMaleUsers();
    }
  }

  const handleInput = (name) => {
    props.findUsers(name);
  }

  return (
    <Background>
      {isItSearch && <Header title={strings.search} isSearch={true} handleInput={handleInput} />}
      {isItUsers && <Header title={headerTitle} />}
      {isLoading ? <Loading /> :
        <>
          <FlatList
            onRefresh={refetchUsers}
            refreshing={isLoading}
            contentContainerStyle={{ flexGrow: 1 }}
            data={users}
            ListEmptyComponent={() => <Card user={null} />}
            renderItem={({ item }) => <Card user={item} />}
            keyExtractor={(item, index) => String(index)}
          />
        </>}
    </Background>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMaleUsers: () => dispatch(fetchMaleUsers()),
  fetchFemaleUsers: () => dispatch(fetchFemaleUsers()),
  languageAction: (val) => dispatch(language(val)),
  findUsers: (name) => dispatch(findUsers(name))
});

const mapStateToProps = (state) => ({
  maleUsersState: state.maleUsers,
  femaleUsersState: state.femaleUsers,
  language: state.language.lang,
  foundUsersState: state.foundUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);