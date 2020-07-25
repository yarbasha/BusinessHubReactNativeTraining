import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import strings from '../../localization/strings';
import { language } from '../../redux/actions/languageAction';
import { styles } from './styles';
import { logout } from '../../redux/actions/usersActions';
import Background from '../../components/Background';

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
      <View style={styles.container}>
        <Text style={styles.text}>{strings.favoriteLanguage}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleLanguage("en")}>
            <Text style={styles.touchText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLanguage("ar")}>
            <Text style={styles.touchText}>عربي</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutTouch}>
            <Text style={styles.logoutTouchText}>{strings.logout}</Text>
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