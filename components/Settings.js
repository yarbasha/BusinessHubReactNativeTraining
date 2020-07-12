import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import strings from '../localization/strings';
import { language } from '../redux/actions/languageAction';
import { settingsStyle } from '../src/styles/styles';
import { logout } from '../redux/actions/usersActions';

function Settings(props) {

  const handleLanguage = (val) => {
    props.languageAction(val);
    strings.setLanguage(val);
  };

  const handleLogout = () => {
    props.logout();
  };

  return (
    <>
      <Header title={strings.settings} />
      <View style={settingsStyle.container}>
        <Text style={settingsStyle.text}>{strings.favoriteLanguage}</Text>
        <View style={settingsStyle.btnContainer}>
          <TouchableOpacity onPress={() => handleLanguage("en")}>
            <Text style={settingsStyle.touchText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLanguage("ar")}>
            <Text style={settingsStyle.touchText}>عربي</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={settingsStyle.touchText}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

const mapDispatchToProps = (dispatch) => ({
  fetchMaleUsers: () => dispatch(fetchMaleUsers()),
  fetchFemaleUsers: () => dispatch(fetchFemaleUsers()),
  languageAction: (val) => dispatch(language(val)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);