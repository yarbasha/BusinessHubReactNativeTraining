import React from 'react';
import { View, Text } from 'react-native'
import { sentStyles, receivedStyles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export default function Message({ item, sender, received }) {

  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  if (item.createdAt) {
    hours = new Date(item.createdAt).getHours();
    minutes = new Date(item.createdAt).getMinutes();
  }

  const text = item.text || item.message;

  const styles = received ? receivedStyles : sentStyles;

  return (
    <>
      <Icon style={styles.icon} name="caret-down" size={40} />
      <View style={styles.container}>
        <Text style={styles.sender}>{sender}</Text>
        <View style={styles.body}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.time}>{hours}:{minutes}</Text>
        </View>
      </View>
    </>
  );
} 