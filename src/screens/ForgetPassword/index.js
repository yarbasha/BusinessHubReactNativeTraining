import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast from '../../components/Toast';
import { styles } from './styles';
import colors from '../../styles/colors';
import { forgetPassword } from '../../redux/actions/forgetPasswordAction';
import FastImage from 'react-native-fast-image';
import ValidateCode from '../ValidateCode';
import { CLEAR_AUTH_ERROR } from '../../redux/ActionTypes';

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

  const view =
    <>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
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
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit} style={[styles.touchButton, { backgroundColor: disabled ? null : colors.primary }]} disabled={disabled}>
              {isLoading ? <ActivityIndicator size="small" color={colors.primary} />
                : <Text style={[styles.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.confirm}</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.bottomText}>{strings.backToLogin}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {props.forgetPasswordResponse.error && <Toast
        duration={2000}
        text={props.forgetPasswordResponse.error}
        onDidShow={() => props.clearError()}
      />}
    </>;

  if (props.forgetPasswordResponse.success) {
    return <ValidateCode />
  } else {
    return view;
  }
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  forgetPasswordResponse: state.auth.forgetPasswordResponse,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  forgetPassword: (values) => dispatch(forgetPassword(values)),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);