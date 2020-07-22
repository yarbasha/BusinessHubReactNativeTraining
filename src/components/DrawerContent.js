import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import colors from '../styles/colors';
import Background from './Background';
import strings from '../localization/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { drawerContentStyle } from '../styles/styles';


function DrawerContent(props) {
  const user = useSelector(state => state.auth.user);
  const [avatar, setAvatar] = useState(user.avatar ? { uri: user.avatar } : require('../images/defaultMaleUser.jpg'));
  return (
    <View>
      <View style={drawerContentStyle.header}>
        <FastImage
          source={avatar}
          style={drawerContentStyle.image}
          onError={() => setAvatar(require('../images/defaultUser.png'))}
        />
        <Text style={drawerContentStyle.text}>{user.email}</Text>
      </View>
      <View style={drawerContentStyle.sectionOne}>
        <DrawerItemList  {...props} />
        <DrawerItem
          {...props}
          label="Topics"
          icon={({ color, size }) => <Icon name="archive" color={color} size={size} />}
        />
      </View>
      <View style={drawerContentStyle.sectionTwo}>
        <DrawerItem
          {...props}
          label="More Information"
          icon={({ color, size }) => <Icon name="info-circle" color={color} size={size} />}
        />
        <DrawerItem
          {...props}
          label="Privacy Settings"
          icon={({ color, size }) => <Icon name="lock" color={color} size={size} />}
        />
      </View>
    </View >
  );
}

export default DrawerContent;