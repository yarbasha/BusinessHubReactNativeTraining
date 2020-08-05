import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from './colors';

export const usersStyle = StyleSheet.create({
  btnContainer: {
    justifyContent: "space-between",
    height: hp('7.5%'),
    alignItems: "center",
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginHorizontal: wp('2.8%')
  },
  inputContainer: {
    marginTop: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginHorizontal: wp('4%')
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: wp('3%'),
    fontSize: hp('2.5%')
  }
});