import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../styles/colors';
import Header from '../../components/Header';
import strings from '../../localization/strings';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import Message from '../../components/Message';
import Background from '../../components/Background';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { pathUrl } from '../../config';
import { fetchMessages } from '../../redux/actions/chatAction';
import Loading from '../../components/Loading';
import { SET_MESSAGE } from '../../redux/ActionTypes';
import { useNavigation } from '@react-navigation/native';


function Chat(props) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const socket = io(pathUrl);

  useEffect(() => {
    console.log("fetch Messages");
    dispatch(fetchMessages());
  }, []);

  useEffect(() => {
    console.log("joinroom");
    console.log(props.user.token)
    socket.emit("joinroom", {
      room: "12",
      token: props.user.token,
      lang: props.language
    });

    return () => {
      console.log("socket close");
      socket.disconnect();
    }
  }, []);

  useEffect(() => {

    socket.on("whoIsConnected", (whoIsConnected) => {
      console.log("whoIsConnected", whoIsConnected);
    });

    socket.on("chat", (chat) => {
      console.log("chat", chat);
    });

    socket.on("chats", (chats) => {
      console.log("chats", chats);
      dispatch({ type: SET_MESSAGE, message: chats });
    });

    socket.on("chat-error", (chatError) => {
      console.log("chat-error", chatError);
      Alert.alert("Chat Error: ", chatError);
      navigation.navigate("Home");
    });

  });


  const handleSend = () => {
    if (message.trim() == "") setMessage("");
    else {
      socket.emit("send", {
        token: props.user.token,
        message: message,
        room: "12"
      });
      setMessage("");
    }
  };
  if (props.loading) {
    return (
      <Background>
        <Header title={strings.chat} />
        <Loading />
      </Background>
    )
  } else {
    return (
      <Background>
        <Header title={strings.chat} />
        <KeyboardAwareFlatList
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always"
          data={props.messages}
          renderItem={({ item }) => {
            let sender = props.chatUsers.filter(user => user._id == item.from)[0];
            if (item.sender) {
              sender = item.sender;
            }
            const username = sender.email.split("@")[0];
            let received = sender.email === props.user.email ? false : true
            return (
              <Message item={item} sender={username} received={received} />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          inverted
        />
        <View style={styles.footer}>
          <TextInput
            placeholder="Type a message"
            blurOnSubmit={false}
            multiline={true}
            style={styles.input}
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
}

const mapStateToProps = (state) => ({
  loading: state.chat.isLoading,
  messages: state.chat.messages,
  chatUsers: state.chat.users,
  user: state.auth.user,
  language: state.language.lang
});

export default connect(mapStateToProps)(Chat);