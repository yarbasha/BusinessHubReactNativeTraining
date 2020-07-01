import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function RenderUser({ user }) {
  if (user) {
    return (
      <View style={styles.user}>
        <Image style={styles.avatar} source={{ uri: user.picture }} />
        <View style={styles.info}>
          <Text style={styles.text}>First Name: {user.name}</Text>
          {/* <Text style={styles.text}>Last Name: {user.name}</Text> */}
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>User not found</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  user: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: '#f0f8ff',
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#69a4d8'
  },
  info: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: 22,
    fontFamily: "cursive",
    marginLeft: 10,
  },
  container: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#f8c4c4a6",
    alignItems: "center"
  }
});