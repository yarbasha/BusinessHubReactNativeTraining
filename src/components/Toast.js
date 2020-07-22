import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { toastStyle } from '../styles/styles';

export default function Toast(props) {
  const [visible, setVisible] = useState(true);
  const opacity = useState(new Animated.Value(0))[0];

  Animated.timing(opacity, {
    toValue: 1,
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
    }, props.duration + 700);
  }, []);

  return (
    <>
      {visible && <Animated.View style={[toastStyle.container, { opacity }]}>
        <View style={toastStyle.textContainer}>
          <Text style={toastStyle.text}>{props.text}</Text>
        </View>
      </Animated.View>}
    </>
  );
}