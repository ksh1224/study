import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from 'home/Main';
import Community from 'home/Community';
import DealList from 'home/DealList';
import UserInfo from 'home/UserInfo';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="DealList" component={DealList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
}
