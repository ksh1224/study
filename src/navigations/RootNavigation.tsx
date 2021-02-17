import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'home';
import Auction from 'page/Auction';
import Chat from 'page/Chat';
import CommunityDetail from 'page/CommunityDetail';
import Write from 'page/Write';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Auction" component={Auction} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
      <Stack.Screen name="Write" component={Write} />
    </Stack.Navigator>
  );
}
