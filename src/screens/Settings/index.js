import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, DevSettings } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import strings from '../../localization/strings';
import { language } from '../../redux/actions/languageAction';
import { styles } from './styles';
import { logout } from '../../redux/actions/usersActions';
import Background from '../../components/Background';
import ActionSheet from 'react-native-actionsheet';

function Settings(props) {

  const languageActionSheet = useRef();
  const logoutActionSheet = useRef();

  const handleLanguage = (index) => {
    if (index == 0 && props.language != "en") {
      props.languageAction("en");
      strings.setLanguage("en");
    } else if (index == 1 && props.language != "ar") {
      props.languageAction("ar");
      strings.setLanguage("ar");
      DevSettings.reload();
    }
  };

  const handleLogout = (index) => {
    if (index == 0) {
      props.logout();
    }
  };

  return (
    <Background>
      <Header title={strings.settings} />
      <View style={styles.container}>
        <Text style={styles.text}>{strings.favoriteLanguage}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => languageActionSheet.current.show()}>
            <Text style={styles.touchText}>{strings.clickHere}</Text>
          </TouchableOpacity>
          <ActionSheet
            ref={languageActionSheet}
            title={strings.actionSheetTitle}
            options={["English", "العربية", <Text style={{ color: "red", fontSize: 18 }}>{strings.cancel}</Text>]}
            cancelButtonIndex={2}
            onPress={(index) => handleLanguage(index)}
          />
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => logoutActionSheet.current.show()} style={styles.logoutTouch}>
            <Text style={styles.logoutTouchText}>{strings.logout}</Text>
          </TouchableOpacity>
          <ActionSheet
            ref={logoutActionSheet}
            title={strings.wantLogout}
            options={[strings.yes, <Text style={{ color: "red", fontSize: 18 }}>{strings.cancel}</Text>]}
            cancelButtonIndex={1}
            onPress={(index) => handleLogout(index)}
          />
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