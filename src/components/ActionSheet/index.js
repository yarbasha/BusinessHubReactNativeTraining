import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { styles } from './styles';

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
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    }
  }));

  const hide = () => {
    setVisible(false);
  }

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onDismiss={hide}
        onRequestClose={hide}
      >
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
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
          </View>
        </View>
      </SafeAreaView>
      </Modal>
    </>
  );
});

export default ActionSheet;