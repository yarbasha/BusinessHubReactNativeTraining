import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import strings from '../../localization/strings';

export default function PaginationCard(props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(user.avatar ? { uri: user.avatar } : require('../../images/defaultUser.png'));
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/lightGrayBGFlipped.jpg')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <FastImage
          source={avatar}
          style={styles.avatar}
          onError={() => setAvatar(require('../../images/defaultUser.png'))}
        />
        <Text style={styles.text}>{strings.email}</Text>
        <Text style={styles.text}>{user.email}</Text>
      </ImageBackground>
    </View>
  );
}
