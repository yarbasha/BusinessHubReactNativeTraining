import React from 'react';
import { View, Text } from 'react-native'
import { messageStyle } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

export default function Message({ item }) {

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  return (
    <>
      <Icon style={{ position: "absolute", top: -14.5 }} name="caret-down" size={40} color={colors.primary} />
      <View style={messageStyle.container}>
        <Text style={messageStyle.sender}>name</Text>
        <View style={messageStyle.body}>
          <Text style={messageStyle.text}>{item}</Text>
          <Text style={messageStyle.time}>{hours}:{minutes}</Text>
        </View>
      </View>
    </>
  );
} 