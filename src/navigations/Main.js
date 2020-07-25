import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import { connect } from 'react-redux';
import strings from '../localization/strings';
import Settings from '../screens/Settings';
import AuthTabs from './AuthTabs';
import Chat from '../screens/Chat';
import { fcmService } from '../services/FCMService';
import { localNotificationService } from '../services/LocalNotificationService';
import DrawerContent from '../components/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import { globalStyles } from '../styles/styles';

const Drawer = createDrawerNavigator();

function Main(props) {

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log("[App] onRegister: ", token);
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify);
      const options = {
        soundName: 'default',
        playSound: true
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options
      );
    }

    function onOpenNotification(notify) {
      console.log("[App] onOpenNotification: ", notify);
      alert("Open Notification: " + notify.body);
    }

    return () => {
      console.log("[App] unRegister");
      fcmService.unRegister();
      localNotificationService.unRegister()
    }
  }, []);

  strings.setLanguage(props.language);

  if (props.user.Token) {
    return (
      <>
        <Drawer.Navigator
          initialRouteName="Chat"
          drawerPosition={props.language == "en" ? "left" : "right"}
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{ unmountOnBlur: true }}
          drawerContentOptions={{
            itemStyle: { marginVertical: 5 },
            activeBackgroundColor: colors.primary,
            activeTintColor: colors.secondary,
            inactiveTintColor: colors.primary,
          }}
          drawerStyle={{ backgroundColor: colors.drawerBackground, width: '75%' }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              title: strings.home,
              drawerIcon: ({ color, size }) => <Icon style={props.language == "ar" && globalStyles.rightDrawerIcon} name="home-outline" size={size} color={color} />,
              drawerLabel: ({ color }) => <Text style={[{ color }, props.language == "ar" && globalStyles.rightDrawerLabel]}>{strings.home}</Text>
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              title: strings.settings,
              drawerIcon: ({ color, size }) => <Icon style={props.language == "ar" && globalStyles.rightDrawerIcon} name="settings-outline" size={size} color={color} />,
              drawerLabel: ({ color }) => <Text style={[{ color }, props.language == "ar" && globalStyles.rightDrawerLabel]}>{strings.settings}</Text>
            }}
          />
          <Drawer.Screen
            name="Chat"
            component={Chat}
            options={{
              title: strings.chat,
              drawerIcon: ({ color, size }) => <Icon style={props.language == "ar" && globalStyles.rightDrawerIcon} name="chatbox-outline" size={size} color={color} />,
              drawerLabel: ({ color }) => <Text style={[{ color }, props.language == "ar" && globalStyles.rightDrawerLabel]}>{strings.chat}</Text>
            }}
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