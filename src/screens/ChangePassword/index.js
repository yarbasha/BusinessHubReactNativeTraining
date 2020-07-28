import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import colors from '../../styles/colors';
import { changePassword } from '../../redux/actions/usersActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from '../../components/Toast';
import FastImage from 'react-native-fast-image';
import { CLEAR_AUTH_ERROR } from '../../redux/ActionTypes';
import Login from '../Login';


function ChangePassword(props) {
  const dispatch = useDispatch();
  let isLoading = props.isLoading;

  const Schema = Yup.object().shape({
    password: Yup.string().min(6, strings.passwordShort).required(strings.passwordRequired),
    passwordConfirmation: Yup.string().oneOf([Yup.ref("password")], strings.passwordMustMatch)
  });

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, isValid, dirty } = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
      lang: props.language,
      userId: props.userId,
      validationCode: props.validationCode
    },
    onSubmit: values => {
      Keyboard.dismiss();
      props.changePassword(values);
    },
    validationSchema: Schema
  });
  let disabled = isLoading || !isValid || !dirty;

  const view =
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
            style={[(errors.password && touched.password) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder={strings.enterPassword}
            secureTextEntry={true}
          />
          <View style={styles.errorTextContainer}>
            {(errors.password && touched.password) && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>
          <TextInput
            style={[(errors.passwordConfirmation && touched.passwordConfirmation) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
            placeholder={strings.renterPassword}
            secureTextEntry
          />
          <View style={styles.errorTextContainer}>
            {(errors.passwordConfirmation && touched.passwordConfirmation) && <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>}
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit} style={[styles.touchButton, { backgroundColor: disabled ? null : colors.primary }]} disabled={disabled}>
              {isLoading ? <ActivityIndicator size="small" color={colors.primary} />
                : <Text style={[styles.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.changePassword}</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {props.changePasswordResponse.error && <Toast
        duration={3000}
        text={props.changePasswordResponse.error}
        onDidShow={() => props.clearError()}
      />}
    </>;
  if (props.changePasswordResponse.token) {
    props.clearError();
    return <Login />
  } else {
    return view;
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  changePasswordResponse: state.auth.changePasswordResponse,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (values) => dispatch(changePassword(values)),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);