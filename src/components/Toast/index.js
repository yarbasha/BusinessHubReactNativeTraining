import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { CLEAR_AUTH_ERROR } from '../../redux/ActionTypes';

export default function Toast(props) {
  const [visible, setVisible] = useState(true);
  const opacity = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();

  Animated.timing(opacity, {
    toValue: 0.8,
    duration: 700,
    useNativeDriver: true
  }).start();

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true
      }).start();
    }, props.duration);

    setTimeout(() => {
      setVisible(false);
      dispatch({ type: CLEAR_AUTH_ERROR });
    }, props.duration + 700);
  }, []);

  return (
    <>
      {visible && <Animated.View style={[styles.container, { opacity }]}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </Animated.View>}
    </>
  );
}