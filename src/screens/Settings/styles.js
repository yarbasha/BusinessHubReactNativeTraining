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
    fontSize: hp(2.8)
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
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(20),
    marginTop: hp(4)
  },
  logoutTouchText: {
    color: colors.secondary,
    fontSize: hp(3),
  }
});