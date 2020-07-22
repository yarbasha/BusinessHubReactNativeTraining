import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import strings from "../localization/strings";
import { connect } from 'react-redux';
import Header from '../components/Header';
import { userDetailsStyle } from '../styles/styles';
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import Background from '../components/Background';

function UserDetails(props) {
  const route = useRoute();
  const { user } = route.params;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../images/defaultMaleUser.jpg') : require('../images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <Background>
        <Header title={strings.userDetails} hasBack={true} />
        <View style={userDetailsStyle.container}>
          <ImageBackground
            source={require('../images/lightGrayBG.jpg')}
            style={userDetailsStyle.background}
            imageStyle={userDetailsStyle.backgroundImage}
          >
            <FastImage
              style={userDetailsStyle.avatar}
              source={image}
              onLoad={() => setImage({ uri: user.picture })}
              onError={() => setImage(defaultUserImage)}
            />
            <View style={userDetailsStyle.body}>
              <Text style={userDetailsStyle.text}>{strings.firstName}{user.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </Background>
    );
  }
  else {
    return (
      <>
        <Header title={strings.userDetails} />
        <View style={userDetailsStyle.errorContainer}>
          <Text style={userDetailsStyle.text}>{strings.userNotFound}</Text>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(UserDetails);