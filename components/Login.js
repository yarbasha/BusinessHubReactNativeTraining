import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { authStyle } from '../src/styles/styles';
import colors from '../src/styles/colors';
import { loginUser } from '../redux/actions/usersActions';

function Login(props) {
  const navigation = useNavigation()
  const toast = useRef();
  let isLoading = props.user.isLoading;

  useEffect(() => {
    if (props.user.loginErr.response) {
      toast.current.show(props.user.loginErr.response.error, DURATION.LENGTH_LONG);
    }
  }, [props.user.loginErr]);

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
      props.login(values);
      if (props.auth.user) {
        toast.current.show("Welcome: " + props.auth.user.email, DURATION.LENGTH_LONG);
      } else if (props.auth.err) {
        toast.current.show(props.auth.err, DURATION.LENGTH_LONG);
      }
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
          {isLoading ? <ActivityIndicator size="small" color={colors.white} />
            : <Text style={authStyle.touchText}>{strings.login}</Text>
          }
        </TouchableOpacity>
      </View>
      <View style={authStyle.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={authStyle.bottomText}>{strings.signupForUs}</Text>
        </TouchableOpacity>
      </View>
      <View style={authStyle.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text style={authStyle.bottomText}>{strings.forgetPasswordMessage}</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toast} positionValue={200} style={{ backgroundColor: colors.primary }} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(loginUser(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);