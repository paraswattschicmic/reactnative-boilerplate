import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Dimensions, TouchableHighlight, } from 'react-native';
import { _scaleText, COLORS, ICONS, BACKGROUND_IMAGES } from '../../../shared';
import { connect } from 'react-redux'
import { isTablet } from 'react-native-device-info';
const W = Dimensions.get('window').width

const CustomHeader = ({
    container,
    left,
    onBackPress = () => { },
    right,
    showBackIcon,
    showBackGround = true,
    title,
    titleStyle,
    showMenuIcon,
    onRightPress = () => { },
    rightText,
    backIcon,
}) => {
    return (
        <ImageBackground source={showBackGround ? BACKGROUND_IMAGES.HEADER_BG : {}} style={[styles.container, container]}>
            <View style={styles.headerRow}>
                <View style={styles.left}>
                    {showBackIcon && <TouchableHighlight underlayColor='transparent'
                        onPress={() => {
                            onBackPress()
                        }}
                        style={styles.icon}
                    >
                        {backIcon ? backIcon : showBackGround ? ICONS.BACKICON(17, 17) : ICONS.BACKICON_BLACK(17, 17)}
                    </TouchableHighlight>}
                </View>
                <View style={styles.center}>
                    <Text numberOfLines={1} style={[styles.title, titleStyle]}>{title}</Text>
                </View>
                <View style={styles.right}>
                    {right &&
                        <TouchableHighlight
                            onPress={onRightPress}
                            style={styles.icon}
                        >
                            {!!right && right}
                        </TouchableHighlight>}
                </View>
            </View>
        </ImageBackground>
    )
};
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: _scaleText(10).fontSize,
        borderBottomWidth: _scaleText(1).fontSize,
        borderColor: COLORS.GREY.LIGHT,
        width: _scaleText(200).fontSize
    },
    menuLabel: selected => ({
        color: selected ? COLORS.GREY._1 : COLORS.GREY._2,
        // marginLeft: _scaleText(8).fontSize,
        fontSize: _scaleText(10).fontSize,
    }),
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W,
        height: W * 0.176,
        borderWidth: 0
    },
    icon: {
        borderWidth: 0,
        paddingVertical: _scaleText(10).fontSize,
        paddingLeft: _scaleText(14).fontSize,
    },
    title: {
        // paddingLeft: (_scaleText(20).fontSize),
        borderWidth: 0,
        fontSize: _scaleText(20).fontSize,
        lineHeight: _scaleText(27).fontSize,
        // marginRight: _scaleText(10).fontSize,
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    rightTitle: {
        fontSize: isTablet() ? _scaleText(14).fontSize : _scaleText(12).fontSize,
        color: COLORS.WHITE
    },
    headerRow: { flexDirection: 'row', marginTop: _scaleText(-10).fontSize, borderWidth: 0, alignItems: 'center' },
    left: {
        flex: 1
    },
    right: {
        flex: 1
    },
    center: {
        flex: 8
    }
});