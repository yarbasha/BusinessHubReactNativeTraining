import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: hp(10),
    left: '50%'
  },
  textContainer: {
    position: "relative",
    left: '-50%',
    backgroundColor: colors.primary,
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5)
  },
  text: {
    fontSize: hp(2.2),
    color: colors.secondary
  }
})