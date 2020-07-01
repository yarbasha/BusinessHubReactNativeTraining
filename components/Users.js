import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TextInput } from 'react-native';
import RenderUser from './RenderUser';
import Loading from './Loading';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [isActive, setIsActive] = useState({
    male: false, female: false, both: true
  });
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://desolate-river-35422.herokuapp.com/female")
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       else {
  //         var error = new Error('Error' + response.status + ':' + response.statusText);
  //         error.response = response;
  //         throw error;
  //       }
  //     })
  //     .then(data => {
  //       setUsers((prevUsers => [...prevUsers, ...data]));
  //     })
  //     .catch(err => { console.log(err) });
  // }, []);

  // useEffect(() => {
  //   fetch("https://desolate-river-35422.herokuapp.com/male")
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       else {
  //         var error = new Error('Error' + response.status + ':' + response.statusText);
  //         error.response = response;
  //         throw error;
  //       }
  //     })
  //     .then(data => {
  //       setUsers((prevUsers => [...prevUsers, ...data]));
  //     })
  //     .catch(err => { console.log(err) });
  // }, []);

  // useEffect(() => {
  //   setActiveUsers(users);
  // }, [users]);

  // const handleBoth = () => {
  //   setActiveUsers(users);
  //   setIsActive({ male: false, female: false, both: true });
  // };
  // const handleMale = () => {
  //   setActiveUsers(users.filter(user => user.gender == 'male'));
  //   setIsActive({ male: true, female: false, both: false });
  // }
  // const handleFemale = () => {
  //   setActiveUsers(users.filter(user => user.gender == 'female'));
  //   setIsActive({ male: false, female: true, both: false });
  // }

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

return (
  <View>
    {/* <View style={styles.btnContainer}>
        <Button title="Both" color={isActive.both ? 'blue' : "#69a4d8"} onPress={handleBoth} />
        <Button title="Female" color={isActive.female ? 'blue' : "#69a4d8"} onPress={handleFemale} />
        <Button title="Male" color={isActive.male ? 'blue' : "#69a4d8"} onPress={handleMale} />
      </View> */}
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={handleInput} placeholder="Search for User" />
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