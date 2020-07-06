import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function Header({ language, title, hasBack }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { flexDirection: language == "en" ? "row" : "row-reverse" }]}>
      {hasBack ? <Icon name={language == "en" ? "arrow-left" : "arrow-right"} size={30} color="#69a4d8" onPress={() => navigation.goBack()} /> :
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
    padding: 5,
    borderBottomColor: '#69a4d8',
    borderBottomWidth: 1,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 18,
    color: "#69a4d8",
    marginVertical: 0,
    marginHorizontal: 10,
    textAlignVertical: "center"
  }
});