import React, { useState } from 'react';
import { UIManager, Text, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, ImageBackground, ScrollView } from 'react-native';
import { styles } from './Login.styles';
import { Field, Formik } from 'formik';
import { CustomTextInput, CustomButton, ScreenHOC } from '../../components'
import { _showCustomToast, BACKGROUND_IMAGES, BUTTON_LABELS, COLORS, ICONS, INPUT_LABELS, INPUT_NAMES, NAVIGATION, STRINGS, _scaleText } from '../../shared';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/actions/auth';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
})
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const netConnected = useSelector(state => state.common.netConnected)
  const [showPassword, setShowPassword] = useState(false)
  const onLogin = (values, resetForm) => {
    let email = values.email.toLowerCase().trim()
    let payload = {
      netConnected,
      email: email,
      password: values.password,
      success: () => {
        resetForm()
      },
      fail: (message) => _showCustomToast({ message, type: 'danger' })
    }
    dispatch(loginRequest(payload))
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <ScreenHOC containerStyle={styles.container} statusBarColor={COLORS.WHITE}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            onLogin(values, resetForm)
          }}
        >
          {({ handleSubmit }) => (
            <View style={styles.formContainer}>

              <Field
                removeMarginTop
                customStyle={styles.fieldMargin}
                keyboardType="email-address"
                labelColor={COLORS.WHITE}
                label={INPUT_LABELS.EMAIL}
                name={INPUT_NAMES.EMAIL}
                component={CustomTextInput}
              />
              <Field
                labelColor={COLORS.WHITE}
                label={INPUT_LABELS.PASSWORD}
                name={INPUT_NAMES.PASSWORD}
                component={CustomTextInput}
                secureTextEntry={showPassword ? false : true}
                rightIcon={showPassword ? ICONS.HOME(13.97) : ICONS.HOME(15.16)}
                onPressRight={() => setShowPassword(!showPassword)}
              />
              <CustomButton
                onPress={handleSubmit}
                buttonStyle={styles.loginButton}
                labelStyle={styles.loginButtonText}
                buttonLabel={BUTTON_LABELS.LOGIN}
              />

            </View>
          )}</Formik>
      </ScreenHOC>
    </KeyboardAvoidingView>
  );
}
