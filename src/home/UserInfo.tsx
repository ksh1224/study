import React from 'react';
import { Text, ScrollView } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function UserInfo() {
  const { flex } = defaultStyle;
  return (
    <ScrollView style={[flex, background('#FFF0')]}>
      <Text>UserInfo</Text>
    </ScrollView>
  );
}
