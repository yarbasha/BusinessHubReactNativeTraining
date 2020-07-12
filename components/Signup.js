import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { authStyle } from '../src/styles/styles';
import colors from '../src/styles/colors';
import { signupUser } from '../redux/actions/usersActions';

function Signup(props) {

  const navigation = useNavigation();
  const toast = useRef();
  let isLoading = props.user.isLoading;

  useEffect(() => {
    if (props.user.signupErr.response) {
      toast.current.show(props.user.signupErr.response.error, DURATION.LENGTH_LONG);
    }
  }, [props.user.signupErr]);

  const Schema = Yup.object().shape({
    email: Yup.string().email(strings.emailInvalid).required(strings.emailRequired),
    password: Yup.string().min(6, strings.passwordShort).required(strings.passwordRequired)
  });

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, isValid, dirty } = useFormik({
    initialValues: {
      email: "",
      password: "",
      lang: props.language
    },
    onSubmit: values => {
      Keyboard.dismiss();
      props.signup(values)
    },
    validationSchema: Schema
  });
  let disabled = isLoading || !isValid || !dirty;
  return (
    <View style={authStyle.container}>
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
      <TextInput
        style={[(errors.password && touched.password) ? authStyle.inputError : authStyle.input, { textAlign: props.language == "en" ? "left" : "right" }]}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        placeholder={strings.enterPassword}
        secureTextEntry
      />
      <View style={authStyle.errorTextContainer}>
        {(errors.password && touched.password) && <Text style={authStyle.errorText}>{errors.password}</Text>}
      </View>
      <View style={authStyle.btnContainer}>
        <TouchableOpacity onPress={handleSubmit} style={[authStyle.touchButton, { backgroundColor: disabled ? colors.disabled : colors.primary }]} disabled={disabled}>
          {isLoading ? <ActivityIndicator size="small" color="#fff" />
            : <Text style={authStyle.touchText}>{strings.signup}</Text>
          }
        </TouchableOpacity>
      </View>
      <View style={authStyle.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={authStyle.bottomText}>{strings.hasAccount}</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toast} positionValue={200} style={{ backgroundColor: '#69a4d8' }} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  signup: (values) => dispatch(signupUser(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);