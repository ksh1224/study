import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigation from 'navigations/RootNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { defaultStyle } from 'utils/stylesUtil';
import { useFonts } from 'expo-font';

export default function App() {
  const { flex } = defaultStyle;
  useFonts({
    Regular: require('assets/fonts/NotoSansKR-Regular.otf'),
    Medium: require('assets/fonts/NotoSansKR-Medium.otf'),
    Light: require('assets/fonts/NotoSansKR-Light.otf'),
    Bold: require('assets/fonts/NotoSansKR-Bold.otf'),
  });
  return (
    <>
      <StatusBar style="auto" />
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
    </>
  );
}
