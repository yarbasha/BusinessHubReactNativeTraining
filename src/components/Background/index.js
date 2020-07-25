import React from 'react';
import { View } from 'react-native'
import { styles } from './styles';

const Background = (props) => (
  <View
    style={styles.container}
    {...props}
  >
    {props.children}
  </View>
);

export default Background;