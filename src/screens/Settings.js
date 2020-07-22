import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import strings from '../localization/strings';
import { language } from '../redux/actions/languageAction';
import { settingsStyle } from '../styles/styles';
import { logout } from '../redux/actions/usersActions';
import Background from '../components/Background';

function Settings(props) {

  const handleLanguage = (val) => {
    props.languageAction(val);
    strings.setLanguage(val);
  };

  const handleLogout = () => {
    props.logout();
  };

  return (
    <Background>
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
        </View>
        <View style={settingsStyle.logoutContainer}>
          <TouchableOpacity onPress={handleLogout} style={settingsStyle.logoutTouch}>
            <Text style={settingsStyle.logoutTouchText}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
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