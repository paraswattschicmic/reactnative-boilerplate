import React from 'react';
import { Text, StyleSheet, TextInput, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { _scaleText, COLORS, ICONS } from '../../../shared';

const { height, width } = Dimensions.get('window')

const CustomTextInput = ({
    active,
    autoCapitalize = 'words',
    autoCorrect = false,
    widthAuto = false,
    customIcon,
    rightIcon,
    errorMessage = '',
    keyboardType = "default",
    label,
    onChangeText,
    input,
    placeholder = '',
    refs,
    returnKeyType = 'done',
    showError = true,
    style = {},
    secureTextEntry,
    labelColor,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    customStyle,
    removeMarginTop,
    errorTextColor,
    borderColor,
    onPressRight,
    ...props
}) => {
    const validationMessage =
        touched[name] && errors[name] ? errors[name] : '';
    return (
        <View style={[customStyle, removeMarginTop ? '' : styles.marginTop]}>
            {label && <Text style={[styles.labelColor(labelColor)]}>{label}</Text>}
            <View style={[styles.inputContainer(borderColor, widthAuto)]}>
                <TextInput
                    placeholderTextColor={COLORS.GREY._4}
                    {...props}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    onChangeText={(text) => {
                        setFieldTouched(name)
                        onChange(name)(text)
                    }
                    }
                    autoCorrect={autoCorrect}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    ref={refs}
                    secureTextEntry={secureTextEntry}
                    returnKeyType={returnKeyType}
                    style={[styles.inputField]}
                    {...input}
                />
                {customIcon ? customIcon : !!validationMessage && ICONS.ERROR(20)}
                {rightIcon ? <TouchableOpacity onPress={onPressRight} ><View style={styles.rightIconContainer} >{rightIcon}</View></TouchableOpacity> : null}
            </View>
            {!!validationMessage && <Text style={styles.error(errorTextColor)}>{validationMessage}</Text>}
        </View >
    )
};

export default CustomTextInput;

const styles = StyleSheet.create({
    error: error => ({
        paddingTop: _scaleText(8).fontSize,
        color: error ? COLORS.WHITE : COLORS.SECONDARY.YELLOW,
        fontSize: _scaleText(12).fontSize,
        width: _scaleText(width * 0.85).fontSize,
    }),
    inputField: {
        flex: 1,
        fontSize: _scaleText(16).fontSize,
        height: '100%',
    },
    labelColor: labelColor => ({
        color: labelColor,
        marginBottom: _scaleText(5).fontSize,
    }),
    inputContainer: (borderColor, widthAuto) => ({
        flexDirection: 'row',
        alignItems: 'center',
        height: width * 0.139,
        width: widthAuto ? 'auto' : _scaleText(width * 0.85).fontSize,
        borderRadius: _scaleText(4).fontSize,
        borderWidth: 1,
        borderColor: borderColor ? borderColor : COLORS.BLACK,
        paddingHorizontal: _scaleText(10).fontSize,
        backgroundColor: COLORS.WHITE
    }),
    marginTop: {
        marginTop: _scaleText(20).fontSize
    },
    rightIconContainer: { padding: _scaleText(5).fontSize }
});