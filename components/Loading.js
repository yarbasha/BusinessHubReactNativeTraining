import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { globalStyles } from '../src/styles/styles';

export default function Loading() {
  return (
    <View style={globalStyles.tabContainer}>
      <ActivityIndicator size={hp('12%')} color="#69a4d8" />
    </View>
  );
}