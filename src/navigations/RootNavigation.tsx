import React from 'react';
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import Auction from 'page/Auction';
import Chat from 'page/Chat';
import CommunityDetail from 'page/CommunityDetail';
import Write from 'page/Write';
import Notifications from 'page/Notifications';
import HomeStack from './HomeNavigation';
import { Animated } from 'react-native';
import SignUp from 'page/SignUp';

const Stack = createStackNavigator<RootStackParamList>();

const forSlide = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

export default function RootNavigation() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: forSlide,
      }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Auction" component={Auction} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
      <Stack.Screen name="Write" component={Write} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
