import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import strings from "../localization/strings";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { cardStyle } from '../styles/styles';
import FastImage from 'react-native-fast-image';

function Card(props) {
  const navigation = useNavigation();
  const { user } = props;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../images/defaultMaleUser.jpg') : require('../images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('User Details', { user })}>
        <View style={cardStyle.container}>
          <ImageBackground
            source={require('../images/lightGrayBG.jpg')}
            style={[cardStyle.background, { flexDirection: props.language == "en" ? "row" : "row-reverse" }]}
            imageStyle={cardStyle.backgroundImage}
          >
            <FastImage
              style={cardStyle.avatar}
              source={image}
              onLoad={() => { if (user.picture) setImage({ uri: user.picture }); }}
              onError={() => setImage(defaultUserImage)}
            />
            <View style={cardStyle.body}>
              <Text style={cardStyle.text}>{strings.firstName}{user.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
  else {
    return (
      <View style={cardStyle.errorContainer}>
        <Text style={cardStyle.text}>{strings.userNotFound}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Card);