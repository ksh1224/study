import React from 'react';
import { Text, View } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function Auction() {
  const { flex, center } = defaultStyle;
  return (
    <View style={[flex, center, background('#FFF')]}>
      <Text>Auction</Text>
    </View>
  );
}
