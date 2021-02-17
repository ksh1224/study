import React from 'react';
import { Text, View } from 'react-native';
import { background, defaultStyle } from 'utils/stylesUtil';

export default function Chat() {
  const { flex, center } = defaultStyle;
  return (
    <View style={[flex, center, background('#FFF')]}>
      <Text>Chat</Text>
    </View>
  );
}
