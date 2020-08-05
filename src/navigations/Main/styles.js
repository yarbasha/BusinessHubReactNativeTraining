import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  rightDrawerLabel: {
    marginLeft: wp(-55),
    alignSelf: "center",
  },
  rightDrawerIcon: {
    marginLeft: wp(57)
  },
  itemStyle: {
    marginVertical: 5
  }
});
