import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Button } from 'react-native';
import RenderUser from './RenderUser';
import Loading from './Loading';
import { fetchMaleUsers } from '../redux/actions/maleAction';
import { fetchFemaleUsers } from '../redux/actions/femaleAction';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import strings from '../localization/strings';
import { language } from '../redux/actions/languageAction';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './Header';


function Users(props) {
  const [activeUsers, setActiveUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let usersIsLoading = true;
  let users;
  let isItSearch = false;
  let headerTitle;
  let isItUsers = false;

  if (props.route.name == "Female Users") {
    users = props.femaleUsersState.users;
    usersIsLoading = props.femaleUsersState.isLoading;
    headerTitle = strings.femaleUsersScreenName;
    isItUsers = true;
  }
  else if (props.route.name == "Male Users") {
    users = props.maleUsersState.users;
    usersIsLoading = props.maleUsersState.isLoading;
    headerTitle = strings.maleUsersScreenName;
    isItUsers = true;
  }
  else {
    users = [];
    usersIsLoading = false;
    isItSearch = true;
  }

  const handleInput = (val) => {
    setIsLoading(true);
    fetch("https://desolate-river-35422.herokuapp.com/search?name=" + val)
      .then(response => {
        if (response.ok) return response.json();
        else {
          var error = new Error('Error' + response.status + ':' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        const { error } = data;
        if (error) {
          setActiveUsers([]);
          setIsLoading(false);
          var err = new Error('Error ' + error);
          throw err;
        }
        else {
          setActiveUsers(data);
          setIsLoading(false);
        }
      })
      .catch(err => console.log(err));
  }

  const handleLanguage = (val) => {
    AsyncStorage.setItem("defaultLanguage", val);
    props.languageAction(val);
    strings.setLanguage(val);
  };

  return (
    < View style={{ flex: 1 }}>
      {isItSearch && <>
        <View style={[styles.btnContainer, { flexDirection: props.language == "en" ? "row" : "row-reverse" }]}>
          <Icon name="bars" size={35} color="#69a4d8" onPress={() => props.navigation.openDrawer()} />
          <Button title="English" color={props.language == "en" ? '#1e13c5' : "#69a4d8"} onPress={() => handleLanguage("en")} />
          <Button title="عربي" color={props.language == "ar" ? '#1e13c5' : "#69a4d8"} onPress={() => handleLanguage("ar")} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleInput}
            placeholder={strings.searchForUser}
          />
          <Text>{props.language.lang}</Text>
        </View>
      </>}
      {usersIsLoading || isLoading ? <Loading /> :
        <>
          {isItUsers && <Header title={headerTitle} />}
          <View style={{ flex: 1 }}>
            <FlatList
              data={[...users, ...activeUsers]}
              ListEmptyComponent={() => <RenderUser user={null} />}
              renderItem={({ item }) => <RenderUser user={item} />}
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
  languageAction: (val) => dispatch(language(val))
});

const mapStateToProps = (state) => ({
  maleUsersState: state.maleUsers,
  femaleUsersState: state.femaleUsers,
  language: state.language.lang
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "space-between",
    height: hp('7.5%'),
    alignItems: "center",
    borderBottomColor: '#69a4d8',
    borderBottomWidth: 1,
    marginHorizontal: wp('2.8%')
  },
  inputContainer: {
    marginTop: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#69a4d8',
    marginHorizontal: wp('4%')
  },
  input: {
    borderWidth: 1,
    borderColor: '#69a4d8',
    borderRadius: 10,
    paddingHorizontal: wp('3%'),
    fontSize: hp('2.5%')
  }
});