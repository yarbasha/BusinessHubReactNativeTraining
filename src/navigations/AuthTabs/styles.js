import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    height: hp(2.3)
  },
  labelStyle: {
    fontSize: hp(1.8)
  },
  tabBarStyle: {
    height: hp(7.5),
    justifyContent: "center"
  }
});
