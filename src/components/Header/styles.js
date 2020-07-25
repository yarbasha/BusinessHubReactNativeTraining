import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: hp('7.5%'),
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginHorizontal: wp('2.8%'),
    marginBottom: hp('1%')
  },
  text: {
    fontSize: hp('2.8%'),
    fontWeight: "bold",
    color: colors.primary,
    marginHorizontal: wp('3%')
  },
  input: {
    borderRadius: wp(10),
    paddingHorizontal: wp(3),
    fontSize: hp(1.5),
    borderColor: colors.primary,
    borderWidth: 0.7,
    width: wp(84),
    height: hp(4.5),
    marginHorizontal: wp(3),
    color: colors.primary
  }
});