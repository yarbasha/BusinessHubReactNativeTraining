import React, { useRef, useEffect } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { forgetPasswordStyle } from '../src/styles/styles';
import colors from '../src/styles/colors';
import { forgetPassword } from '../redux/actions/usersActions';

function ForgetPassword(props) {
  const navigation = useNavigation()
  const toast = useRef();
  let isLoading = props.isLoading;

  useEffect(() => {
    if (props.errMess) {
      toast.current.show(props.errMess, DURATION.LENGTH_LONG);
    }
  }, [props.errMess]);

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
    <View style={forgetPasswordStyle.container}>
      <TextInput
        style={[(errors.email && touched.email) ? forgetPasswordStyle.inputError : forgetPasswordStyle.input, { textAlign: props.language == "en" ? "left" : "right" }]}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        placeholder={strings.enterEmail}
      />
      <View style={forgetPasswordStyle.errorTextContainer}>
        {(errors.email && touched.email) && <Text style={forgetPasswordStyle.errorText}>{errors.email}</Text>}
      </View>
      <View style={forgetPasswordStyle.btnContainer}>
        <TouchableOpacity onPress={handleSubmit} style={[forgetPasswordStyle.touchButton, { backgroundColor: disabled ? colors.disabled : colors.primary }]} disabled={disabled}>
          {isLoading ? <ActivityIndicator size="small" color={colors.white} />
            : <Text style={forgetPasswordStyle.touchText}>{strings.confirm}</Text>
          }
        </TouchableOpacity>
      </View>
      <View style={forgetPasswordStyle.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={forgetPasswordStyle.bottomText}>{strings.backToLogin}</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toast} positionValue={200} style={{ backgroundColor: colors.primary }} />
    </View>
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