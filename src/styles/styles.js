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
    fontSize: hp(2.8)
  },
  touchText: {
    color: colors.primary,
    fontSize: hp(2.5),
    textDecorationLine: "underline"
  },
  logoutContainer: {
    alignItems: "center",
    borderTopColor: colors.primary,
    borderTopWidth: 1
  },
  logoutTouch: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(20),
    marginTop: hp(4)
  },
  logoutTouchText: {
    color: colors.secondary,
    fontSize: hp(3),
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
    height: '100%'
  },
  backgroundImage: {
    borderRadius: wp(5)
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
    paddingHorizontal: wp(3),
    fontSize: hp(1.5),
    // backgroundColor: colors.background,
    borderColor: colors.primary,
    borderWidth: 0.7,
    width: wp(84),
    height: hp(4.5),
    marginHorizontal: wp(3)
  }
});

export const forgetPasswordStyle = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: wp('4%'),
    // justifyContent: "center"
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
    borderRadius: wp(20),
    borderColor: colors.primary,
    borderWidth: 1
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
    flexGrow: 1,
    backgroundColor: colors.primary
    // marginHorizontal: wp('4%'),
    // justifyContent: "center"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(2.2)
  },
  image: {
    height: hp(15),
    width: wp(76)
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

export const userDetailsStyle = StyleSheet.create({
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

export const paginationCardStyle = StyleSheet.create({
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

export const chatStyle = StyleSheet.create({
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
})

export const messageStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginBottom: 2,
    borderRadius: wp(2.6),
    borderTopLeftRadius: 0,
    marginLeft: 8,
    paddingHorizontal: 5,
    paddingBottom: 2,
    alignSelf: "flex-start"
  },
  sender: {
    fontSize: hp(1.5),
    color: colors.secondary
  },
  body: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  text: {
    fontSize: hp(2.5),
    marginRight: 10,
    color: colors.secondary
  },
  time: {
    fontSize: hp(1.5),
    textAlignVertical: "bottom",
    color: colors.secondary
  }
});

export const toastStyle = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: hp(15),
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
});

export const drawerContentStyle = StyleSheet.create({
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
  }
})