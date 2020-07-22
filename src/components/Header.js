import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import strings from '../localization/strings';
import { headerStyle } from '../styles/styles';
import colors from '../styles/colors';

function Header({ language, title, hasBack, isSearch, handleInput }) {
  const navigation = useNavigation();
  return (
    <View style={[headerStyle.container, { flexDirection: language == "en" ? "row" : "row-reverse" }]}>
      {hasBack ? <Icon name={language == "en" ? "arrow-left" : "arrow-right"} size={wp(6.5)} color={colors.primary} onPress={() => navigation.goBack()} /> :
        <Icon name="bars" size={wp(6.5)} color={colors.primary} onPress={() => navigation.openDrawer()} />
      }
      {isSearch ? <TextInput
        style={[headerStyle.input, { textAlign: language == "en" ? "left" : "right" }]}
        onChangeText={handleInput}
        placeholder={strings.searchForUser}
      /> :
        <Text style={headerStyle.text}>{title}</Text>}
    </View>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Header);