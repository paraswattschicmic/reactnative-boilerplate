import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../shared';
import { BottomTab, } from '../screens';
const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.BOTTOM_TABS_DASHBOARD}>
      <Stack.Screen component={BottomTab} name={NAVIGATION.BOTTOM_TABS_DASHBOARD} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
