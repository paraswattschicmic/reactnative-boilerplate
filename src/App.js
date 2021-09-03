import React, { useEffect } from 'react';
import { RootNavigator } from './navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import SplashScreen from 'react-native-splash-screen'
import { LoaderHOC } from './components';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View } from 'react-native';
import FlashMessage from "react-native-flash-message";

export function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500)
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{ flex: 1 }}>
          <LoaderHOC>
            <RootNavigator />
            <FlashMessage
              position="bottom"
              autoHide
              duration={5000}
            />
          </LoaderHOC>
        </View>
      </PersistGate>
    </Provider>
  );
}
