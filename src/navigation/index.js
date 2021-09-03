import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import { updateInternetStatus } from '../redux/actions';
import { updateAuthToken } from '../shared';

export function RootNavigator() {
  const dispatch = useDispatch()
  const authToken = useSelector(state => state.common.authToken)
  useEffect(() => {
    authToken && updateAuthToken(authToken);
    const unsubscribe = NetInfo.addEventListener(({ isConnected, isInternetReachable }) => {
      dispatch(updateInternetStatus(isConnected))
    });
    return unsubscribe
  }, [])
  /**
   * TODO- Replace user value
   */
  return (
    <NavigationContainer>
      {authToken ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
