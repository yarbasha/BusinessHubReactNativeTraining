import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '95%',
    borderColor: "lightgray",
    borderWidth: 1,
    borderBottomWidth: 0,
    position: "absolute"
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: hp(5),
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    height: hp(6.5)
  }
});