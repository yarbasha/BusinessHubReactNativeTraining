import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import strings from '../../localization/strings';
import { styles } from './styles';
import colors from '../../styles/colors';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Header({ language, title, hasBack, isSearch, handleInput }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { flexDirection: language == "en" ? "row" : "row-reverse" }]}>
      {hasBack ? <Icon name={language == "en" ? "arrow-back-outline" : "arrow-forward-outline"} size={wp(6.5)} color={colors.primary} onPress={() => navigation.goBack()} /> :
        // <Icon name="menu-outline" size={wp(6.5)} color={colors.primary} onPress={() => { navigation.openDrawer(); Keyboard.dismiss(); }} />
        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.openDrawer(); Keyboard.dismiss(); }}>
          <FastImage
            source={require('../../images/smallLogo.png')}
            style={{ width: wp(6.5), height: wp(6.5) }}
          />
        </TouchableOpacity>
      }
      {
        isSearch ? <TextInput
          style={[styles.input, { textAlign: language == "en" ? "left" : "right" }]}
          onChangeText={handleInput}
          placeholder={strings.searchForUser}
        /> :
          <Text style={styles.text}>{title}</Text>
      }
    </View >
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Header);