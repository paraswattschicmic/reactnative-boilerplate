import React, { useRef } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../components/';
import { COLORS, TEXT_CONST, _scaleText } from '../../../shared';
const ScreenHOC = ({
    barStyle = 'dark-content',
    bottomSafeArea,
    children,
    containerStyle = {},
    headerContainerStyle,
    headerLeft,
    headerRight,
    headerTitle,
    onBackPress,
    safeAreaRequired = true,
    showBackIcon,
    showHeader = false,
    statusBarColor = COLORS.PRIMARY.GREEN,
    statusBarRequired = true,
    titleStyle,
    showMenuIcon,
    onSelectDate,
    onRightPress,
    changeFilter,
    showFilter,
    rightText,
    backIcon,
    showBackGround=true
}) => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderColor: 'red', borderWidth: 0 }}>
            {!!safeAreaRequired && <SafeAreaView style={{ backgroundColor: statusBarColor, }} />}
            {<StatusBar backgroundColor={statusBarColor} animated barStyle={'dark-content'} />}

            {!!showHeader && <CustomHeader
                container={headerContainerStyle}
                left={headerLeft}
                onBackPress={onBackPress}
                right={headerRight}
                showBackIcon={showBackIcon}
                title={headerTitle}
                titleStyle={titleStyle}
                showMenuIcon={showMenuIcon}
                onRightPress={onRightPress}
                changeFilter={changeFilter}
                showFilter={showFilter}
                onSelectDate={onSelectDate}
                rightText={rightText}
                backIcon={backIcon}
                showBackGround={showBackGround}
            />}
            <View style={{ flex: 1, ...containerStyle, borderWidth: 0 }}>
                {children}
            </View>
            {!!bottomSafeArea && <SafeAreaView style={{ backgroundColor: 'white', }} />}
        </View>)
};


export default ScreenHOC;
