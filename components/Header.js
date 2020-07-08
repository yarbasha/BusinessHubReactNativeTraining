import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Header({ language, title, hasBack }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { flexDirection: language == "en" ? "row" : "row-reverse" }]}>
      {hasBack ? <Icon name={language == "en" ? "arrow-left" : "arrow-right"} size={wp(6.5)} color="#69a4d8" onPress={() => navigation.goBack()} /> :
        <Icon name="bars" size={30} color="#69a4d8" onPress={() => navigation.openDrawer()} />
      }
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: hp('7.5%'),
    borderBottomColor: '#69a4d8',
    borderBottomWidth: 1,
    marginHorizontal: wp('2.8%'),
    marginBottom: hp('1%')
  },
  headerText: {
    fontSize: hp('2.8%'),
    fontWeight: "bold",
    color: "#69a4d8",
    marginHorizontal: wp('3%')
  }
});