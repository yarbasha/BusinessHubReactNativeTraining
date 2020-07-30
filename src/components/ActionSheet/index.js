import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Modal } from 'react-native';
import { styles } from './styles';

const actionSheet = {
  title: "Select your option",
  titleStyle: { fontSize: 14, color: "gray" },
  items: [
    {
      text: "Yes",
      textStyle: { fontSize: 18, color: "green" },
      onPress: () => console.log("Yes")
    },
    {
      text: "No",
      textStyle: { fontSize: 18, color: "red" },
      onPress: () => console.log("No")
    }
  ]
}

function ActionSheetItem(props) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => { props.onPress(); props.hide(); }} activeOpacity={0.8}>
        <Text style={props.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const ActionSheet = forwardRef((props, ref) => {
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const translateY = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: -height,
        duration: 500,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }, [visible]);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    }
  }));

  const hide = () => {
    console.log("hide")
    setVisible(false);
  }

  return (
    <>
      <Animated.View
        style={[styles.container, { top: '99.9%', translateY }]}
        onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
      >
        <View style={styles.header}>
          <Text style={props.titleStyle}>{props.title}</Text>
        </View>
        {props.items.map((item, index) => {
          return (
            <ActionSheetItem
              key={index}
              text={item.text}
              textStyle={item.textStyle}
              onPress={item.onPress}
              hide={hide}
            />
          )
        })}
      </Animated.View>
    </>
  );
});

export default ActionSheet;