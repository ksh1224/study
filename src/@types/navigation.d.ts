import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export {};

declare global {
  type RootStackParamList = {
    HomeStack: undefined;
    Auction: undefined;
    Chat: undefined;
    CommunityDetail: undefined;
    Write: undefined;
    Notifications: undefined;
  };

  type HomeStackParamList = {
    Main: undefined;
    Community: undefined;
    DealList: undefined;
    UserInfo: undefined;
  };

  type RootStackkNavigationProps<
    T extends keyof RootStackParamList = 'HomeStack'
  > = StackNavigationProp<RootStackParamList, T>;

  type RootRouteProps<
    T extends keyof RootStackParamList = 'HomeStack'
  > = RouteProp<RootStackParamList, T>;

  type MainStackNavigationProps<
    T extends keyof HomeStackParamList = 'Main'
  > = BottomTabNavigationProp<MainStackParamList, T>;

  type MainRouteProps<T extends keyof HomeStackParamList = 'Main'> = RouteProp<
    MainStackParamList,
    T
  >;
}
