import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';
import colors from '../../styles/colors';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={hp('12%')} color={colors.primary} />
    </View>
  );
}