import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native"
import { _scaleText } from "../../../shared"
const W = Dimensions.get('window').width
const H = Dimensions.get('window').height

const CustomButton = ({ buttonLabel, buttonStyle, labelStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, styles.buttonContainer]}>
            <Text style={[labelStyle, styles.textStyle]}>
                {buttonLabel}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: _scaleText(W * 0.85).fontSize,
        height: _scaleText(W * 0.14).fontSize,
        borderRadius: _scaleText(4).fontSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: _scaleText(16).fontSize
    }
})

export default CustomButton