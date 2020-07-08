import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import strings from '../localization/strings';
import { useNavigation } from '@react-navigation/native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


function Signup(props) {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false);
  const toast = useRef();

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
      setIsLoading(true);
      Keyboard.dismiss();
      fetch("https://desolate-river-35422.herokuapp.com/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) return response.json();
          else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
          }
        })
        .then(data => {
          const { error } = data;
          if (error) {
            setIsLoading(false);
            toast.current.show(error, DURATION.LENGTH_LONG);
            var err = new Error('Error ' + error);
            throw err;
          }
          else {
            setIsLoading(false);
            toast.current.show("Success");
            console.log("Success");
          }
        })
        .catch(err => console.log(err));
    },
    validationSchema: Schema
  });
  let disabled = isLoading || !isValid || !dirty;
  return (
    <View style={styles.container}>
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
        <TouchableOpacity onPress={handleSubmit} style={[styles.touchButton, { backgroundColor: disabled ? '#a0a0a0' : '#69a4d8' }]} disabled={disabled}>
          {isLoading ? <ActivityIndicator size="small" color="#fff" />
            : <Text style={styles.touchText}>{strings.signup}</Text>
          }
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.bottomText}>{strings.hasAccount}</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toast} positionValue={200} style={{ backgroundColor: '#69a4d8' }} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang
});

export default connect(mapStateToProps)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('4%'),
  },
  input: {
    borderWidth: 0.7,
    borderColor: '#69a4d8',
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
  },
  inputError: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
    borderColor: 'red',
    color: "red"
  },
  errorText: {
    color: "red",
    marginHorizontal: wp('5%'),
    fontSize: hp('1.5%')
  },
  btnContainer: {
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    alignItems: "center"
  },
  bottomText: {
    textAlign: "center",
    color: "#69a4d8"
  },
  touchButton: {
    height: hp('6%'),
    width: wp('35%'),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  touchText: {
    color: '#fff',
    fontSize: hp('2.5%')
  },
  errorTextContainer: {
    height: hp('2.5%')
  }
})