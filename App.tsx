import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootNavigation from 'navigations/RootNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { defaultStyle } from 'utils/stylesUtil';

export default function App() {
  const { flex } = defaultStyle;
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
