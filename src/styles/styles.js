import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from './colors';

export const globalStyles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export const settingsStyle = StyleSheet.create({
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
    fontSize: wp(5)
  },
  touchText: {
    color: colors.primary,
    fontSize: wp(4),
    textDecorationLine: "underline"
  }
});

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

export const cardStyle = StyleSheet.create({
  container: {
    marginHorizontal: wp('2.8%'),
    marginVertical: hp('0.6%'),
    borderRadius: wp('5%'),
    borderBottomLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
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
    borderRadius: wp('5%'),
    borderTopRightRadius: wp('10%'),
    borderBottomLeftRadius: wp('10%')
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
  }
});

export const headerStyle = StyleSheet.create({
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
    paddingHorizontal: wp('3%'),
    fontSize: hp('1.5%'),
    backgroundColor: colors.background,
    width: wp(84),
    height: hp(4.5),
    marginHorizontal: wp(3)
  }
});

export const forgetPasswordStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
  },
  input: {
    borderWidth: 0.7,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
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
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
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
    borderRadius: 50
  },
  touchText: {
    color: colors.touchText,
    fontSize: hp('2.5%')
  },
  errorTextContainer: {
    height: hp('2.5%')
  }
});

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
  },
  input: {
    borderWidth: 0.7,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
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
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
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
    borderRadius: 50
  },
  touchText: {
    color: colors.touchText,
    fontSize: hp('2.5%')
  },
  errorTextContainer: {
    height: hp('2.5%')
  }
});

export const userDetailsStyle = StyleSheet.create({
  container: {
    marginHorizontal: wp('2.8%'),
    marginTop: hp('8%'),
    marginBottom: hp('0.6%'),
    borderRadius: wp('8%'),
    backgroundColor: colors.background,
    height: hp('30%'),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  }
});