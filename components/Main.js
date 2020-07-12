import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import { connect } from 'react-redux';
import strings from '../localization/strings';
import Settings from './Settings';
import AuthTabs from './AuthTabs';

const Drawer = createDrawerNavigator();

function Main(props) {

  strings.setLanguage(props.language);
  console.log(props)
  if (props.user.Token) {
    return (
      <>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerPosition={props.language == "en" ? "left" : "right"}
          drawerContentOptions={{ itemStyle: { alignItems: props.language == "en" ? "flex-start" : "flex-end" } }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ title: strings.home, unmountOnBlur: true }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{ title: strings.settings, unmountOnBlur: true }}
          />
        </Drawer.Navigator>
      </>
    );
  } else {
    return <AuthTabs />
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  user: state.auth.user
});

export default connect(mapStateToProps)(Main);