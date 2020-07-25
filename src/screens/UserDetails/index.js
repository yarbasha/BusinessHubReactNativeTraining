import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import strings from "../../localization/strings";
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import Background from '../../components/Background';

function UserDetails(props) {
  const route = useRoute();
  const { user } = route.params;
  if (user) {
    const defaultUserImage = user.gender == "male" ? require('../../images/defaultMaleUser.jpg') : require('../../images/defaultFemaleUser.jpg');
    const [image, setImage] = useState(defaultUserImage);
    return (
      <Background>
        <Header title={strings.userDetails} hasBack={true} />
        <View style={styles.container}>
          <ImageBackground
            source={require('../../images/lightGrayBG.jpg')}
            style={styles.background}
            imageStyle={styles.backgroundImage}
          >
            <FastImage
              style={styles.avatar}
              source={image}
              onLoad={() => setImage({ uri: user.picture })}
              onError={() => setImage(defaultUserImage)}
            />
            <View style={styles.body}>
              <Text style={styles.text}>{strings.firstName}{user.name}</Text>
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
        <View style={styles.errorContainer}>
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