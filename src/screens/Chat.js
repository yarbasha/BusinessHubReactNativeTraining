import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import colors from '../styles/colors';
import Header from '../components/Header';
import strings from '../localization/strings';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { chatStyle } from '../styles/styles';
import Message from '../components/Message';
import Background from '../components/Background';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';


function Chat() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const token = useSelector(state => state.auth.user.Token);
  const socket = io("https://desolate-river-35422.herokuapp.com");

  useEffect(() => {
    socket.emit("joinroom", {
      room: "12",
      token
    });

    // socket.on("whoIsConnected", (whoIsConnected) => {
    //   console.log("whoIsConnected", whoIsConnected);
    // });

    socket.on("chat", (chat) => {
      console.log("chat", chat);
    });

    socket.on("chats", (chats) => {
      console.log("chats", chats);
      setData(data => [chats, ...data]);
    });

    socket.on("chat-error", (chatError) => {
      console.log("chat-error", chatError);
    });

    return () => {
      socket.off();
    }

  });

  const handleSend = () => {
    if (message.trim() == "") setMessage("");
    else {
      socket.emit("send", {
        token: token,
        message: message,
        room: "12"
      });
      setMessage("");
    }
  }

  return (
    <Background>
      <Header title={strings.chat} />
      <KeyboardAwareFlatList
        contentContainerStyle={chatStyle.container}
        keyboardShouldPersistTaps="always"
        data={data}
        renderItem={({ item }) => <Message item={item} />}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
      <View style={chatStyle.footer}>
        <TextInput
          blurOnSubmit={false}
          multiline={true}
          style={chatStyle.input}
          enablesReturnKeyAutomatically={true}
          value={message}
          onChangeText={(value) => setMessage(value)}
          onSubmitEditing={handleSend}
        />
        <Icon
          name="send"
          size={30}
          color={colors.primary}
          onPress={handleSend}
        />
      </View>
    </Background>
  );
}

export default Chat;