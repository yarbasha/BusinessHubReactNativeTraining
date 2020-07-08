import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import strings from "../localization/strings";
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './Header';

function UserDetails(props) {
  const { user } = props.route.params;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../src/images/defaultMaleUser.jpg') : require('../src/images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <>
        <Header title={strings.userDetails} hasBack={true} />
        <View style={[styles.user]}>
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
      </>
    );
  }
  else {
    return (
      <>
        <Header title={strings.userDetails} />
        <View style={styles.container}>
          <Text style={styles.text}>{strings.userNotFound}</Text>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(UserDetails);

const styles = StyleSheet.create({
  user: {
    marginHorizontal: wp('2.8%'),
    marginTop: hp('8%'),
    marginBottom: hp('0.6%'),
    borderRadius: wp('8%'),
    backgroundColor: '#eee',
    height: hp('30%'),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: hp('-7%'),
    width: wp('32%'),
    height: hp('16%'),
    borderRadius: wp('8%'),
  },
  info: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: hp('2.7%'),
    fontFamily: "arial",
    marginHorizontal: wp('2%'),
    color: "#69a4d8"
  },
  container: {
    marginTop: hp('4%'),
    alignItems: "center"
  }
});