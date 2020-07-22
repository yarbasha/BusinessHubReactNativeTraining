import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { paginationCardStyle } from '../styles/styles';
import strings from '../localization/strings';

export default function PaginationCard(props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(user.avatar ? { uri: user.avatar } : require('../images/defaultUser.png'));
  return (
    <View style={paginationCardStyle.container}>
      <ImageBackground
        source={require('../images/lightGrayBG.jpg')}
        style={paginationCardStyle.background}
        imageStyle={paginationCardStyle.backgroundImage}
      >
        <FastImage
          source={avatar}
          style={paginationCardStyle.avatar}
          onError={() => setAvatar(require('../images/defaultUser.png'))}
        />
        <Text style={paginationCardStyle.text}>{strings.email}</Text>
        <Text style={paginationCardStyle.text}>{user.email}</Text>
      </ImageBackground>
    </View>
  );
}
