import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  background,
  customColors,
  margin,
  padding,
  REM,
  square,
  styles,
  text,
} from 'utils/stylesUtil';
import Profile from '../elements/Profile';

interface Props {
  title?: string;
  onPress?: (e: GestureResponderEvent) => void;
}

export default function ComunnityListItem({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{ width: '100%', minHeight: 180 * REM }}>
      <View style={[styles('flex'), padding(10, 15)]}>
        <Text style={[text(14), margin({ bottom: 5 })]}>주제</Text>
        <View style={margin({ bottom: 15 })}>
          <Profile name="퓅퓅" subText="1시간 전" />
        </View>
        <Text style={text(18)}>강남구 의자 빨리 처분합니다. 연락주세요.</Text>
      </View>
      <View
        style={[
          styles('row'),
          square('100%', 40),
          padding({ left: 10 }),
          { borderTopColor: '#000', borderTopWidth: 1 * REM },
        ]}>
        <View
          style={[
            styles(['row', 'center']),
            square(50, 40),
            margin({ right: 10 }),
          ]}>
          <Image
            style={margin({ right: 5 })}
            source={require('assets/images/heart.png')}
          />
          <Text>18</Text>
        </View>
        <View style={[styles(['row', 'center']), square(50, 40)]}>
          <Image
            style={margin({ right: 5 })}
            source={require('assets/images/comment.png')}
          />
          <Text>18</Text>
        </View>
      </View>
      <View
        style={[
          square('100%', 10),
          background('rgb(240, 240, 240)'),
          styles({
            borderTopColor: customColors.gray,
            borderTopWidth: 1 * REM,
          }),
        ]}
      />
    </Pressable>
  );
}
