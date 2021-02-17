import React from 'react';
import { Text, ScrollView } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function Community() {
  const { flex } = defaultStyle;
  return (
    <ScrollView style={[flex, background('#FFF0')]}>
      <Text>Community</Text>
    </ScrollView>
  );
}
