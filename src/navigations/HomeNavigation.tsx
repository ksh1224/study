import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'components/home/Main';
import Community from 'components/home/Community';
import DealList from 'components/home/DealList';
import UserInfo from 'components/home/UserInfo';
import BottomTab from 'components/section/BottomTab';
import { deviceHeight } from 'utils/stylesUtil';
import { Platform } from 'react-native';

const Stack = createBottomTabNavigator<HomeStackParamList>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      sceneContainerStyle={{ height: deviceHeight }}
      tabBar={(props) => <BottomTab {...props} />}
      tabBarOptions={{
        keyboardHidesTabBar: Platform.OS == 'ios' ? false : true,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="DealList" component={DealList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
    </Stack.Navigator>
  );
}
