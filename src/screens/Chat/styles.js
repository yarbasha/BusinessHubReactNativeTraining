import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexGrow: 1,
    justifyContent: "flex-end",
    marginHorizontal: wp('2.8%')
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp('2.8%')
  },
  input: {
    width: '90%',
    minHeight: hp(5),
    lineHeight: hp(2.5),
    borderWidth: 0.7,
    borderColor: colors.primary,
    borderRadius: wp(2.6),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(4),
    fontSize: hp('2%'),
    marginVertical: hp('1%'),
    marginRight: wp(1.5)
  }
});