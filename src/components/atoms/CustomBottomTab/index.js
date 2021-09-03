import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS, _scaleText, ICONS, NAVIGATION } from '../../../shared';
import { isTablet } from 'react-native-device-info';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TABS = [
    {
        defaultIcon: ICONS.HOME(_scaleText(20).fontSize),
        key: 0,
        title: NAVIGATION.BOTTOM_TABS.TAB1,
    },
    {
        defaultIcon: ICONS.HOME(_scaleText(20).fontSize),
        key: 1,
        title: NAVIGATION.BOTTOM_TABS.TAB2,
    },
    {
        defaultIcon: ICONS.HOME(_scaleText(20).fontSize),
        key: 2,
        title: NAVIGATION.BOTTOM_TABS.TAB3,
    },
    {
        defaultIcon: ICONS.HOME(_scaleText(20).fontSize),
        key: 3,
        title: NAVIGATION.BOTTOM_TABS.TAB4,
    },
    {
        defaultIcon: ICONS.HOME(_scaleText(20).fontSize),
        key: 4,
        title: NAVIGATION.BOTTOM_TABS.TAB5,
    }
]

const CustomBottomTab = ({
    navigation,
    state,
}) => {
    let { bottom } = useSafeAreaInsets();
    return (
        <View style={styles.barContainer}>

            <View style={styles.container}>
                {TABS.map((item, index) => {
                    let { title, key, defaultIcon } = item;
                    let active = state.index == key;
                    return <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        onPress={() => navigation.navigate(title)}
                        style={styles.tabContainer}
                    >
                        {active && <View style={{ borderWidth: 2, position: 'absolute', top: -2, width: 32, borderColor: COLORS.SECONDARY.YELLOW }} />}
                        {defaultIcon}
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    </TouchableOpacity>
                })}
            </View>
            <SafeAreaView style={{ backgroundColor: 'white', }} />

            {!!bottom && <View style={{ width: '100%', height: bottom, backgroundColor: 'white', }} />}
        </View>
    );
}

export default CustomBottomTab;

const styles = StyleSheet.create({
    barContainer: {
        bottom: 0,
        elevation: 5,
        left: 0,
        position: 'absolute',
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        backgroundColor: 'white'
    },
    backImage: {
        backgroundColor: 'transparent',
        height: _scaleText(isTablet() ? 90 : 54).fontSize,
        justifyContent: 'center',
        paddingBottom: _scaleText(isTablet() ? 20 : 0).fontSize,
        bottom: -_scaleText(isTablet() ? 20 : 0).fontSize,
        width: '100%',
    },
    container: {
        // borderWidth: 2,
        flexDirection: 'row'
    },
    tabContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: _scaleText(5).fontSize,
    },
    createContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: _scaleText(5).fontSize,
    },
    create: {
        position: 'absolute',
        top: -_scaleText(isTablet() ? 35 : 27).fontSize
    },
    title: {
        color: COLORS.SECONDARY.YELLOW,
        marginTop: _scaleText(2).fontSize,
        fontSize: _scaleText(12).fontSize
    }
});