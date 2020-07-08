import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={hp('12%')} color="#69a4d8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});