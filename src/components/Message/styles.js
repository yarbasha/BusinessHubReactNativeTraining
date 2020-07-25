import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const receivedStyles = StyleSheet.create({
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
  icon: {
    position: "absolute",
    top: -14.5,
    color: colors.primary
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

export const sentStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginBottom: 2,
    borderRadius: wp(2.6),
    borderTopRightRadius: 0,
    marginRight: 8,
    paddingHorizontal: 5,
    paddingBottom: 2,
    alignSelf: "flex-end"
  },
  icon: {
    position: "absolute",
    top: -14.5,
    right: 0,
    color: colors.secondary
  },
  sender: {
    fontSize: hp(1.5),
    textAlign: "right",
    color: colors.primary
  },
  body: {
    flexDirection: "row-reverse",
    flexWrap: 'wrap'
  },
  text: {
    fontSize: hp(2.5),
    marginLeft: 10,
    color: colors.primary
  },
  time: {
    fontSize: hp(1.5),
    textAlignVertical: "bottom",
    color: colors.primary
  }
});