import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%')
  },
  btnContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: hp('7.5%'),
    alignItems: "center",
    marginHorizontal: wp('2.8%')
  },
  text: {
    color: colors.primary,
    fontSize: hp(2.8),
    textAlign: "center"
  },
  touchText: {
    color: colors.primary,
    fontSize: hp(2.5),
    textDecorationLine: "underline"
  },
  logoutContainer: {
    alignItems: "center",
    borderTopColor: colors.primary,
    borderTopWidth: 1
  },
  logoutTouch: {
    backgroundColor: colors.primary,
    paddingVertical: hp(0.75),
    paddingHorizontal: wp(10),
    borderRadius: wp(20),
    marginTop: hp(4),
    elevation: 24
  },
  logoutTouchText: {
    color: colors.secondary,
    fontSize: hp(3),
  }
});