import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function Main() {
  const { flex } = defaultStyle;
  return (
    <View style={[flex, background('#FFF0')]}>
      <Text>Main</Text>
    </View>
  );
}
