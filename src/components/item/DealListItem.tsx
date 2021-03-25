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
  border,
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

export default function DealListItem({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={styles({
        flex: 1,
        flexDirection: 'row',
        minHeight: 126 * REM,
        marginHorizontal: 20 * REM,
        paddingVertical: 15 * REM,
        borderBottomColor: customColors.gray,
        borderBottomWidth: 1 * REM,
      })}>
      <Pressable
        style={[
          square(98),
          padding({ right: 20 }),
          border({ radius: 12 }),
          background('#000'),
          margin({ right: 10 }),
        ]}>
        <Image source={{ uri: '' }} />
      </Pressable>
      <View style={[padding(5, 0), styles('flex')]}>
        <Text style={[text(16), margin({ bottom: 5 })]}>물건 이름</Text>
        <Text style={[text(14), margin({ bottom: 10 })]} ellipsizeMode="tail">
          설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
          설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
        </Text>
        <Text style={text(16)}>가격</Text>
      </View>
      <View style={[square(40, '100%'), styles('center')]}>
        <Image
          source={require('assets/images/chatting.png')}
          style={margin({ bottom: 5 })}
        />
        <Text>채팅</Text>
      </View>
    </Pressable>
  );
}
