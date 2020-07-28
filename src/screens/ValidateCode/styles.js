import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(7)
  },
  image: {
    height: hp(12),
    width: wp(60)
  },
  contentContainer: {
    backgroundColor: colors.secondary,
    flexGrow: 1,
    borderTopLeftRadius: wp(13),
    borderTopRightRadius: wp(13),
    paddingHorizontal: wp(10),
    paddingTop: hp(5.5)
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
    color: colors.primary
  },
  inputError: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
    borderColor: colors.error,
    color: colors.error
  },
  errorText: {
    color: colors.error,
    marginHorizontal: wp('5%'),
    fontSize: hp('1.5%')
  },
  btnContainer: {
    marginTop: hp(3),
    marginBottom: hp(2),
    alignItems: "center"
  },
  touchContainer: {
    marginTop: hp(1),
    alignItems: "center"
  },
  bottomText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: hp(2)
  },
  touchButton: {
    height: hp('6%'),
    width: wp('35%'),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(20),
    borderWidth: 1,
    borderColor: colors.primary
  },
  touchText: {
    color: colors.primary,
    fontSize: hp('2.5%')
  },
  errorTextContainer: {
    height: hp('2.5%')
  }
});