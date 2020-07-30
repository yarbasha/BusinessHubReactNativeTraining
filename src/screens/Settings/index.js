import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, DevSettings } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import strings from '../../localization/strings';
import { language } from '../../redux/actions/languageAction';
import { styles } from './styles';
import { logout } from '../../redux/actions/logoutAction';
import Background from '../../components/Background';
import ActionSheet from '../../components/ActionSheet';

function Settings(props) {
  const languageActionSheet = useRef();
  const logoutActionSheet = useRef();

  const handleLanguage = (value) => {
    if (value == "en" && props.language != "en") {
      props.languageAction("en");
      strings.setLanguage("en");
    } else if (value == "ar" && props.language != "ar") {
      props.languageAction("ar");
      strings.setLanguage("ar");
      // DevSettings.reload();
    }
  };

  const handleLogout = () => {
    props.logout();
  };

  return (
    <>
      <Background>
        <Header title={strings.settings} />
        <View style={styles.container}>
          <Text style={styles.text}>{strings.favoriteLanguage}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                languageActionSheet.current.show();
                logoutActionSheet.current.hide()
              }}
            >
              <Text style={styles.touchText}>{strings.clickHere}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoutContainer}>
            <TouchableOpacity
              onPress={() => {
                logoutActionSheet.current.show();
                languageActionSheet.current.hide();
              }}
              style={styles.logoutTouch}
            >
              <Text style={styles.logoutTouchText}>{strings.logout}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
      <ActionSheet
        ref={languageActionSheet}
        title={strings.actionSheetTitle}
        titleStyle={{ fontSize: 14, color: "gray" }}
        items={[
          {
            text: "English",
            textStyle: { color: "blue", fontSize: 18 },
            onPress: () => { handleLanguage("en"); }
          },
          {
            text: "العربية",
            textStyle: { color: "blue", fontSize: 18 },
            onPress: () => { handleLanguage("ar"); }
          },
          {
            text: strings.cancel,
            textStyle: { color: "red", fontSize: 18 },
            onPress: () => { }
          }
        ]}
      />
      <ActionSheet
        ref={logoutActionSheet}
        title={strings.wantLogout}
        titleStyle={{ fontSize: 14, color: "gray" }}
        items={[
          {
            text: strings.yes,
            textStyle: { color: "blue", fontSize: 18 },
            onPress: () => { handleLogout(); }
          },
          {
            text: strings.cancel,
            textStyle: { color: "red", fontSize: 18 },
            onPress: () => { }
          }
        ]}
      />
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