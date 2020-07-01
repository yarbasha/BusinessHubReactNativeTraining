import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, Button } from 'react-native';

const RenderUser = ({ user }) => (
  <View style={styles.user}>
    <Image style={styles.avatar} source={{ uri: user.picture }} />
    <View style={styles.info}>
      <Text style={styles.text}>First Name: {user.name}</Text>
      {/* <Text style={styles.text}>Last Name: {user.name}</Text> */}
    </View>
  </View>
);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [isActive, setIsActive] = useState({
    male: false, female: false, both: true
  });

  useEffect(() => {
    fetch("https://desolate-river-35422.herokuapp.com/female")
      .then(response => {
        console.log("female", response)
        if (response.ok) return response.json();
        else {
          var error = new Error('Error' + response.status + ':' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        setUsers((prevUsers => [...prevUsers, ...data]));
      })
      .catch(err => { console.log(err) });
  }, []);

  useEffect(() => {
    fetch("https://desolate-river-35422.herokuapp.com/male")
      .then(response => {
        console.log(response)
        if (response.ok) return response.json();
        else {
          var error = new Error('Error' + response.status + ':' + response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(data => {
        setUsers((prevUsers => [...prevUsers, ...data]));
      })
      .catch(err => { console.log(err) });
  }, []);

  useEffect(() => {
    setActiveUsers(users);
  }, [users]);

  const handleBoth = () => {
    setActiveUsers(users);
    setIsActive({ male: false, female: false, both: true });
  };
  const handleMale = () => {
    setActiveUsers(users.filter(user => user.gender == 'male'));
    setIsActive({ male: true, female: false, both: false });
  }
  const handleFemale = () => {
    setActiveUsers(users.filter(user => user.gender == 'female'));
    setIsActive({ male: false, female: true, both: false });
  }
  return (
    <View>
      <View style={styles.btnContainer}>
        <Button title="Both" color={isActive.both ? 'blue' : "#69a4d8"} onPress={handleBoth} />
        <Button title="Female" color={isActive.female ? 'blue' : "#69a4d8"} onPress={handleFemale} />
        <Button title="Male" color={isActive.male ? 'blue' : "#69a4d8"} onPress={handleMale} />
      </View>
      <View>
        <FlatList
          data={activeUsers}
          renderItem={({ item }) => <RenderUser user={item} />}
          keyExtractor={(item, index) => String(index)}
        />
      </View>

    </View>
  );
};
export default Users;

const styles = StyleSheet.create({
  user: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: '#f0f8ff',
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#69a4d8'
  },
  info: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: 18,
    fontFamily: "cursive",
    marginLeft: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    padding: 10,
    borderColor: 'transparent',
    borderBottomColor: '#69a4d8',
    borderWidth: 1
  }
});