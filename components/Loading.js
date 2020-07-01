import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: "center"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "#69a4d8",
  }
});