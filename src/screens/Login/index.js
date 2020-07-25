import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import colors from '../../styles/colors';
import { loginUser } from '../../redux/actions/usersActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from '../../components/Toast';
import FastImage from 'react-native-fast-image';

function Login(props) {
  const navigation = useNavigation()
  let isLoading = props.user.isLoading

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
    },
    validationSchema: Schema
  });
  let disabled = isLoading || !isValid || !dirty;

  return (
    <>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage
            resizeMode="contain"
            style={styles.image}
            source={require('../../images/BHLogo.png')}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={[(errors.email && touched.email) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder={strings.enterEmail}
          />
          <View style={styles.errorTextContainer}>
            {(errors.email && touched.email) && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>
          <TextInput
            style={[(errors.password && touched.password) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder={strings.enterPassword}
            secureTextEntry
          />
          <View style={styles.errorTextContainer}>
            {(errors.password && touched.password) && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit} style={[styles.touchButton, { backgroundColor: disabled ? null : colors.primary }]} disabled={disabled}>
              {isLoading ? <ActivityIndicator size="small" color={colors.primary} />
                : <Text style={[styles.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.login}</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={styles.touchContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.bottomText}>{strings.signupForUs}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
              <Text style={styles.bottomText}>{strings.forgetPasswordMessage}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {props.user.loginErr && <Toast
        duration={3000}
        text={props.user.loginErr.response.error}
      />}
    </>
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