import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Users from './Users';
import { connect } from 'react-redux';
import strings from '../localization/strings';


const Drawer = createDrawerNavigator();

function Main(props) {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition={props.language == "en" ? "left" : "right"}
        drawerContentOptions={{ itemStyle: { alignItems: props.language == "en" ? "flex-start" : "flex-end" } }}
      >
        <Drawer.Screen name="Home" component={Home} options={{ title: strings.home }} />
        <Drawer.Screen name="Users" component={Users} options={{ title: strings.users }} />
      </Drawer.Navigator>
    </>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Main);