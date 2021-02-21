import Header from 'components/section/Header';
import React from 'react';
import { Text, View } from 'react-native';
import { background, defaultStyle, text } from 'utils/stylesUtil';

export default function UserInfo() {
  const { flex } = defaultStyle;
  return (
    <View style={[flex, background('#FFF0')]}>
      <Header>
        <Text style={text(20)}>유저 정보</Text>
      </Header>
    </View>
  );
}
