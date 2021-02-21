import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  height,
  movePosition,
  padding,
  styles,
  text,
  customColors,
} from 'utils/stylesUtil';

export default function BottomTab({ navigation, state }: BottomTabBarProps) {
  const tab: {
    name: string;
    link: string;
    source: ImageSourcePropType;
  }[] = [
    {
      name: '정보/거래',
      link: 'Main',
      source: require('assets/images/money.png'),
    },
    {
      name: '커뮤니티',
      link: 'Community',
      source: require('assets/images/community.png'),
    },
    {
      name: '거래내역',
      link: 'DealList',
      source: require('assets/images/list.png'),
    },
    {
      name: '내정보',
      link: 'UserInfo',
      source: require('assets/images/user.png'),
    },
  ];
  return (
    <View style={styles(['w100', height(62)])}>
      <LinearGradient
        colors={['rgba(133,208,222,0)', 'rgba(133,208,222,0.2)']}
        style={styles([
          'absolute',
          'w100',
          height(2),
          movePosition({ top: -2 }),
        ])}
      />
      <View style={styles(['flex', 'row'])}>
        {tab.map(({ name, link, source }, index) => {
          const selected = index === state.index;
          const selectColor = selected ? customColors.main : 'rgb(148,148,148)';

          return (
            <Pressable
              key={name}
              style={styles([
                'flex',
                'between',
                padding({ top: 7, bottom: 5 }),
              ])}
              onPress={() => navigation.navigate(link)}>
              <View style={styles([height(29), 'center'])}>
                <Image
                  style={{
                    tintColor: selectColor,
                  }}
                  source={source}
                />
              </View>
              <Text
                style={text({
                  size: 12,
                  weight: 'Bold',
                  color: selectColor,
                })}>
                {name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
