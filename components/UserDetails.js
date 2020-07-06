import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import strings from "../localization/strings";
import { connect } from 'react-redux';

function UserDetails(props) {
  const user = props.route.params.user;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../src/images/defaultMaleUser.jpg') : require('../src/images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <View style={[styles.user, { flexDirection: props.language == "en" ? "row" : "row-reverse" }]}>
        <Image
          style={styles.avatar}
          source={image}
          onLoad={() => setImage({ uri: user.picture })}
          onError={() => setImage(defaultUserImage)}
        />
        <View style={styles.info}>
          <Text style={styles.text}>{strings.firstName}{user.name}</Text>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{strings.userNotFound}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(UserDetails);

const styles = StyleSheet.create({
  user: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 50,
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
    fontSize: 18,
    fontFamily: "arial",
    marginHorizontal: 10,
    color: "#69a4d8"
  },
  container: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#f8c4c4a6",
    alignItems: "center"
  }
});