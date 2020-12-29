import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from 'components/Main';

export type RootStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
