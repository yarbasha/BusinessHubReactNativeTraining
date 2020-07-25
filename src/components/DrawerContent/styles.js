import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  header: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.7,
    paddingVertical: hp(3.5),
    justifyContent: "center",
    alignItems: "center"
  },
  sectionOne: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.7,
    paddingVertical: hp(3)
  },
  sectionTwo: {
    paddingVertical: hp(3)
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    marginBottom: hp(1),
  },
  text: {
    fontSize: hp(2),
    color: colors.primary
  },
  rightDrawerLabel: {
    marginLeft: wp(-55),
    alignSelf: "center",
  },
  rightDrawerIcon: {
    marginLeft: wp(57)
  }
})