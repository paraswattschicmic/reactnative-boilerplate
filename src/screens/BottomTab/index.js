
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen, Tab4Screen, Tab5Screen } from './Screens';
import { CustomBottomTab } from '../../components';
import { NAVIGATION, _scaleText } from '../../shared';

const Tab = createBottomTabNavigator();

const BottomTab = ({
}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            backBehavior='initialRoute'
            tabBar={(props) => <CustomBottomTab {...props} />}
        >
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.TAB1} component={Tab1Screen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.TAB2} component={Tab2Screen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.TAB3} component={Tab3Screen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.TAB4} component={Tab4Screen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.TAB5} component={Tab5Screen} />
        </Tab.Navigator >
    )
};

export default BottomTab;

