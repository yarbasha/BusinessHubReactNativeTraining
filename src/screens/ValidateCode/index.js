import React from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import Toast from '../../components/Toast';
import { styles } from './styles';
import colors from '../../styles/colors';
import { validateCode } from '../../redux/actions/usersActions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import { CLEAR_AUTH_ERROR } from '../../redux/ActionTypes';
import ChangePassword from '../ChangePassword';

function ValidateCode(props) {
  let isLoading = props.isLoading;

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
            style={[(errors.validationCode && touched.validationCode) ? styles.inputError : styles.input, { textAlign: props.language == "en" ? "left" : "right" }]}
            onChangeText={handleChange('validationCode')}
            onBlur={handleBlur('validationCode')}
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
      </KeyboardAwareScrollView>
      {props.errMess && <Toast
        duration={3000}
        text={props.errMess}
        onDidShow={() => props.clearError}
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
  validateCodeResponse: state.auth.validateCodeResponse,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  validateCode: (values) => dispatch(validateCode(values)),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidateCode);