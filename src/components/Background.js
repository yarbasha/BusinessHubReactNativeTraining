import React from 'react';
import { ImageBackground, View } from 'react-native'
import colors from '../styles/colors';

const Background = (props) => (
  <View
    style={{ height: '100%', width: '100%', backgroundColor: colors.background }}
    {...props}
  >
    {props.children}
  </View>
);

export default Background;