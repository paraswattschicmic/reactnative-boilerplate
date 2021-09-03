import { scaleText } from 'react-native-text';
import { Alert, Dimensions, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { isTablet } from 'react-native-device-info';
import moment from 'moment';
let dim = Dimensions.get('window')

export const _scaleText = (fontSize) => {
    if (isTablet()) {
        return ({
            fontSize: height / (812 / fontSize),
            lineHeight: height / (812 / fontSize) * 1.3
        })
    } else {
        return scaleText({ fontSize });
    }
}

export const _showCustomToast = ({ type = 'danger', message = '', description = '', ...rest }) => {
    showMessage({
        icon: 'auto',
        message,
        type,
        description,
        ...rest,
        position: 'top'
    })
}

export const _showNativeAlert = ({ title = '', subtitle = '', buttons = [] }) => {
    Alert.alert(
        title,
        subtitle,
        [...buttons],
    )
}

