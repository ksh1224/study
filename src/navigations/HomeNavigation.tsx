import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'components/home/Main';
import Community from 'components/home/Community';
import DealList from 'components/home/DealList';
import UserInfo from 'components/home/UserInfo';
import BottomTab from 'components/section/BottomTab';

const Stack = createBottomTabNavigator<HomeStackParamList>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="DealList" component={DealList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
}
