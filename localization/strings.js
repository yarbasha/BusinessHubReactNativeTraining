import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  ar: {
    how: "كيف حالك؟",
    searchForUser: "ابحث عن مستخدم...",
    userNotFound: "المستخدم غير موجود!",
    firstName: "الاسم: ",
    femaleUsersScreenName: "المستخدمات",
    maleUsersScreenName: "المستخدمون",
    userDetails: "تفاصيل المستخدم",
    info: "معلومات",
    home: "الرئيسية",
    users: "المستخدمون"
  },
  en: {
    how: "how are you?",
    searchForUser: "Search for User...",
    userNotFound: "User not Found!",
    firstName: "First Name: ",
    femaleUsersScreenName: "Female Users",
    maleUsersScreenName: "Male Users",
    userDetails: "User Details",
    info: "Information",
    home: "Home",
    users: "Users"
  }
});

export default strings;