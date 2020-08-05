import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import Toast from '../../components/Toast';
import { styles } from './styles';
import colors from '../../styles/colors';
import { validateCode } from '../../redux/actions/validateCodeAction';
import FastImage from 'react-native-fast-image';
import { CLEAR_ERRORS } from '../../redux/ActionTypes';
import ChangePassword from '../ChangePassword';

function ValidateCode(props) {
  const isLoading = props.isLoading;

  const Schema = Yup.object().shape({
    validationCode: Yup.string().required(strings.codeRequired)
  });

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, isValid, dirty } = useFormik({
    initialValues: {
      validationCode: "",
      lang: props.language
    },
    onSubmit: values => {
      Keyboard.dismiss();
      props.validateCode(values);
    },
    validationSchema: Schema
  });

  const disabled = isLoading || !isValid || !dirty;

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
            style={[(errors.validationCode && touched.validationCode) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('validationCode')}
            onBlur={handleBlur('validationCode')}
            autoCapitalize="none"
            value={values.validationCode}
            placeholder={strings.enterCode}
          />
          <View style={styles.errorTextContainer}>
            {(errors.validationCode && touched.validationCode) && <Text style={styles.errorText}>{errors.validationCode}</Text>}
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit} style={[styles.touchButton, { backgroundColor: disabled ? null : colors.primary }]} disabled={disabled}>
              {isLoading ? <ActivityIndicator size="small" color={colors.primary} />
                : <Text style={[styles.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.validate}</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {props.validateCodeResponse.error && <Toast
        duration={2000}
        text={props.validateCodeResponse.error}
      // onDidShow={() => props.clearErrors()}
      />}
    </>;
  if (props.validateCodeResponse.userId) {
    return <ChangePassword userId={props.validateCodeResponse.userId} validationCode={values.validationCode} />
  } else {
    return view;
  }

}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  validateCodeResponse: state.forgetPassword.validateCodeResponse,
  isLoading: state.forgetPassword.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  validateCode: (values) => dispatch(validateCode(values)),
  clearErrors: () => dispatch({ type: CLEAR_ERRORS })
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateCode);