import Header from 'components/section/Header';
import React from 'react';
import { Text, View } from 'react-native';
import { background, defaultStyle, text } from 'utils/stylesUtil';

export default function Community() {
  const { flex } = defaultStyle;
  return (
    <View style={[flex, background('#FFF0')]}>
      <Header>
        <Text style={text(20)}>커뮤니티</Text>
      </Header>
    </View>
  );
}
