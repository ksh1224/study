import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigation from 'navigations/RootNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { defaultStyle } from 'utils/stylesUtil';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import configureStore from 'store';
import rootSaga from 'store/sagas';

const store = configureStore();
store.runSaga(rootSaga);

export default function App() {
  const { flex } = defaultStyle;
  useFonts({
    Regular: require('./assets/fonts/NotoSansKR-Regular.otf'),
    Medium: require('./assets/fonts/NotoSansKR-Medium.otf'),
    Light: require('./assets/fonts/NotoSansKR-Light.otf'),
    Bold: require('./assets/fonts/NotoSansKR-Bold.otf'),
  });
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <SafeAreaView style={flex}>
          <NavigationContainer
            theme={{
              colors: {
                ...DefaultTheme.colors,
                background: '#fff',
              },
              dark: false,
            }}>
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
