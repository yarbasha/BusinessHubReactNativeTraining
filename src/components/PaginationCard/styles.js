import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    height: hp(30),
    marginHorizontal: wp('2.8%'),
    marginVertical: hp('0.6%'),
    borderRadius: wp('5%'),
    backgroundColor: colors.background,
    elevation: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: wp(5),
  },
  text: {
    fontSize: hp(2.5),
    color: colors.primary
  },
  endText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: hp(2)
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    borderRadius: wp(5)
  }
});