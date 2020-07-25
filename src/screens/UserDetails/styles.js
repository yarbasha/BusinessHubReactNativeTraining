import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('2.8%'),
    marginTop: hp('8%'),
    marginBottom: hp('0.6%'),
    borderRadius: wp('8%'),
    backgroundColor: colors.background,
    height: hp('30%'),
    elevation: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  avatar: {
    marginTop: hp('-7%'),
    width: wp('32%'),
    height: hp('16%'),
    borderRadius: wp('8%'),
  },
  body: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly"
  },
  text: {
    fontSize: hp('2.7%'),
    fontFamily: "arial",
    marginHorizontal: wp('2%'),
    color: colors.primary
  },
  errorContainer: {
    marginTop: hp('4%'),
    alignItems: "center"
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


