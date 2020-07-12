import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import strings from "../localization/strings";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { cardStyle } from '../src/styles/styles';

function Card(props) {
  const navigation = useNavigation();
  const { user } = props;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../src/images/defaultMaleUser.jpg') : require('../src/images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('User Details', { user })}>
        <View style={[cardStyle.container, { flexDirection: props.language == "en" ? "row" : "row-reverse" }]}>
          <Image
            style={cardStyle.avatar}
            source={image}
            onLoad={() => setImage({ uri: user.picture })}
            onError={() => setImage(defaultUserImage)}
          />
          <View style={cardStyle.body}>
            <Text style={cardStyle.text}>{strings.firstName}{user.name}</Text>
          </View>
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