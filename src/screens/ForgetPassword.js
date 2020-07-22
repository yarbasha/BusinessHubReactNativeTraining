import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast from '../components/Toast';
import { authStyle } from '../styles/styles';
import colors from '../styles/colors';
import { forgetPassword } from '../redux/actions/usersActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

function ForgetPassword(props) {
  const navigation = useNavigation()
  let isLoading = props.isLoading;

  const Schema = Yup.object().shape({
    email: Yup.string().email(strings.emailInvalid).required(strings.emailRequired)
  });

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, isValid, dirty } = useFormik({
    initialValues: {
      email: "",
      lang: props.language
    },
    onSubmit: values => {
      Keyboard.dismiss();
      props.forgetPassword(values);
    },
    validationSchema: Schema
  });

  let disabled = isLoading || !isValid || !dirty;

  return (
    <>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={authStyle.container}>
        <View style={authStyle.imageContainer}>
          <FastImage
            resizeMode="contain"
            style={authStyle.image}
            source={require('../images/BHLogo.png')}
          />
        </View>
        <View style={authStyle.contentContainer}>
          <TextInput
            style={[(errors.email && touched.email) ? authStyle.inputError : authStyle.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder={strings.enterEmail}
          />
          <View style={authStyle.errorTextContainer}>
            {(errors.email && touched.email) && <Text style={authStyle.errorText}>{errors.email}</Text>}
          </View>
          <View style={authStyle.btnContainer}>
            <TouchableOpacity onPress={handleSubmit} style={[authStyle.touchButton, { backgroundColor: disabled ? null : colors.primary }]} disabled={disabled}>
              {isLoading ? <ActivityIndicator size="small" color={colors.primary} />
                : <Text style={[authStyle.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.confirm}</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={authStyle.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={authStyle.bottomText}>{strings.backToLogin}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {props.errMess.error && <Toast
        duration={3000}
        text={props.errMess.error}
      />}
    </>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  errMess: state.auth.forgetPasswordMess,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  forgetPassword: (values) => dispatch(forgetPassword(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);