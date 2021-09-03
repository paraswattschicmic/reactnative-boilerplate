import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, _scaleText } from '../../shared';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red'
  },
  formContainer: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 2.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: _scaleText(20).fontSize,
  },
  formFieldsContainer: {
    width: _scaleText(W * 0.85).fontSize,
    marginTop: _scaleText(W * 0.180).fontSize,
    marginBottom: _scaleText(20).fontSize
  },
  logIntoText: {
    color: COLORS.WHITE,
    fontSize: _scaleText(22).fontSize,
  },
  fieldMargin: {
    marginTop: _scaleText(W * 0.044).fontSize
  },
  loginButton: {
    marginTop: _scaleText(29).fontSize,
    backgroundColor: COLORS.SECONDARY.YELLOW,
    borderColor: COLORS.BLACK, borderWidth: 1
  },
  loginButtonText: {
    color: 'white',
  },
  forgetText: {
    marginVertical: _scaleText(W * 0.060).fontSize,
    textAlign: 'center', opacity: 0.89,
    color: COLORS.WHITE,
    fontSize: _scaleText(14).fontSize,
  },
  createButton: {
    backgroundColor: COLORS.PRIMARY.GREEN,
    borderColor: COLORS.WHITE,
    borderWidth: 1
  },
  createButtonText: {
    color: 'white',
  },
  container2: {
    width: W,
    alignItems: 'center',
    flex: 7.8
  },
  paddingBottom: { paddingBottom: _scaleText(50).fontSize }
});
