import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text, Button, AsyncStorage } from 'react-native';
import RenderUser from './RenderUser';
import Loading from './Loading';
import { fetchMaleUsers } from '../redux/actions/maleAction';
import { fetchFemaleUsers } from '../redux/actions/femaleAction';
import { connect } from 'react-redux';
import strings from '../localization/strings';
import { language } from '../redux/actions/languageAction';

function Users(props) {
  const [activeUsers, setActiveUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState(strings.getLanguage());

  const handleInput = (val) => {
    setIsLoading(true);
    fetch("https://desolate-river-35422.herokuapp.com/search?name=" + val)
      .then(response => {
        if (response.ok) return response.json();
        else {
          var error = new Error('Error' + response.status + ':' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        const { error } = data;
        if (error) {
          setActiveUsers([]);
          setIsLoading(false);
          var err = new Error('Error ' + error);
          throw error;
        }
        else {
          setActiveUsers(data);
          setIsLoading(false);
        }
      })
      .catch(err => console.log(err));
  }
  const handleLanguage = (val) => {
    setLang(val);
    strings.setLanguage(val);
    AsyncStorage.setItem("defaultLanguage", val);
    props.language(val);
  }

  return (
    <View>
      <View style={styles.btnContainer}>
        <Button title="English" color={lang === "en" ? 'blue' : "#69a4d8"} onPress={() => handleLanguage("en")} />
        <Button title="عربي" color={lang === "ar" ? 'blue' : "#69a4d8"} onPress={() => handleLanguage("ar")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={handleInput} placeholder="Search for User..." />
        <Text style={styles.title}>
          {strings.how}
        </Text>
      </View>
      {isLoading ? <Loading /> :
        <View>
          <FlatList
            data={activeUsers}
            ListEmptyComponent={() => <RenderUser user={null} />}
            renderItem={({ item }) => <RenderUser user={item} />}
            keyExtractor={(item, index) => String(index)}
          />
        </View>}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMaleUsers: () => dispatch(fetchMaleUsers()),
  fetchFemaleUsers: () => dispatch(fetchFemaleUsers()),
  language: (val) => dispatch(language(val))
});

const mapStateToProps = (state) => ({
  maleUsersState: state.maleUsers,
  femaleUsersState: state.femaleUsers,
  languageState: state.language
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    padding: 10,
    borderColor: 'transparent',
    borderBottomColor: '#69a4d8',
    borderWidth: 1
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#69a4d8',
    paddingBottom: 10,
    marginHorizontal: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#69a4d8',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
  }
});