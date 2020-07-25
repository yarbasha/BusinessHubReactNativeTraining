import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import colors from '../../styles/colors';
import Background from '../Background';
import strings from '../../localization/strings';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { styles } from './styles';


function DrawerContent(props) {
  const user = useSelector(state => state.auth.user);
  const language = useSelector(state => state.language.lang);
  const [avatar, setAvatar] = useState(user.avatar ? { uri: user.avatar } : require('../../images/defaultMaleUser.jpg'));
  return (
    <View>
      <View style={styles.header}>
        <FastImage
          source={avatar}
          style={styles.image}
          onError={() => setAvatar(require('../../images/defaultUser.png'))}
        />
        <Text style={styles.text}>{user.email}</Text>
      </View>
      <View style={styles.sectionOne}>
        <DrawerItemList  {...props} />
        <DrawerItem
          {...props}
          icon={({ color, size }) => <Icon style={language == "ar" && styles.rightDrawerIcon} name="file-tray-full-outline" color={color} size={size} />}
          label={({ color }) => <Text style={[{ color }, language == "ar" && styles.rightDrawerLabel]}>{strings.topics}</Text>}
        />
      </View>
      <View style={styles.sectionTwo}>
        <DrawerItem
          {...props}
          icon={({ color, size }) => <Icon style={language == "ar" && styles.rightDrawerIcon} name="call-outline" color={color} size={size} />}
          label={({ color }) => <Text style={[{ color }, language == "ar" && styles.rightDrawerLabel]}>{strings.contactus}</Text>}
        />
        <DrawerItem
          {...props}
          icon={({ color, size }) => <Icon style={language == "ar" && styles.rightDrawerIcon} name="lock-closed-outline" color={color} size={size} />}
          label={({ color }) => <Text style={[{ color }, language == "ar" && styles.rightDrawerLabel]}>{strings.privacy}</Text>}
        />
      </View>
    </View >
  );
}

export default DrawerContent;