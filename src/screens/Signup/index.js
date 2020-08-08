import React, { useRef } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity, ActivityIndicator, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast from '../../components/Toast';
import { styles } from './styles';
import colors from '../../styles/colors';
import { signupUser } from '../../redux/actions/signupAction';
import FastImage from 'react-native-fast-image';
import { CLEAR_AUTH_ERROR } from '../../redux/ActionTypes';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Signup(props) {
  const scrollView = useRef();
  const navigation = useNavigation();
  const isLoading = props.isLoading;

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

  const disabled = isLoading || !isValid || !dirty;

  return (
    <>
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={hp(5)}>
      <ScrollView ref={scrollView} keyboardShouldPersistTaps="always" contentContainerStyle={styles.container}>
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
            keyboardType="email-address"
            autoCapitalize="none"
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
            onFocus={() => scrollView.current.scrollToEnd()}
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
                : <Text style={[styles.touchText, { color: disabled ? colors.primary : colors.secondary }]}>{strings.signup}</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.bottomText}>{strings.hasAccount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      {props.error && <Toast
        duration={2000}
        text={props.error.message}
        onDidShow={() => props.clearError()}
      />
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  signup: (values) => dispatch(signupUser(values)),
  clearError: () => dispatch({ type: CLEAR_AUTH_ERROR })
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);