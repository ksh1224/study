import Header from 'components/section/Header';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { background, customColors, defaultStyle, text } from 'utils/stylesUtil';

// 거래 데이터
export default function DealList() {
  const { flex } = defaultStyle;
  return (
    <View style={[flex, background('#FFF0')]}>
      <Header
        rightButton={
          <Pressable onPress={() => {}}>
            <Image
              style={{ tintColor: customColors.main }}
              source={require('assets/images/trash.png')}
            />
          </Pressable>
        }>
        <Text style={text(20)}>거래내역</Text>
      </Header>
    </View>
  );
}
