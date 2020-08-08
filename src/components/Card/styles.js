import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    height: wp('20%'),
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
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('5%')
  },
  body: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    
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
    height: '100%'
  },
  backgroundImage: {
    borderRadius: wp(5)
  }
});