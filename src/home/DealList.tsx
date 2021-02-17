import React from 'react';
import { Text, ScrollView } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function DealList() {
  const { flex, center } = defaultStyle;
  return (
    <ScrollView style={[flex, background('#FFF0')]}>
      <Text>DealList</Text>
    </ScrollView>
  );
}
