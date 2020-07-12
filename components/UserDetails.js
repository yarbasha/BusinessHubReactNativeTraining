import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import strings from "../localization/strings";
import { connect } from 'react-redux';
import Header from './Header';
import { userDetailsStyle } from '../src/styles/styles';

function UserDetails(props) {
  const { user } = props.route.params;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../src/images/defaultMaleUser.jpg') : require('../src/images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <>
        <Header title={strings.userDetails} hasBack={true} />
        <View style={userDetailsStyle.container}>
          <Image
            style={userDetailsStyle.avatar}
            source={image}
            onLoad={() => setImage({ uri: user.picture })}
            onError={() => setImage(defaultUserImage)}
          />
          <View style={userDetailsStyle.body}>
            <Text style={userDetailsStyle.text}>{strings.firstName}{user.name}</Text>
          </View>
        </View>
      </>
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