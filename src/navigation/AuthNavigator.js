import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../shared';
import { Login } from '../screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={NAVIGATION.LOGIN} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
