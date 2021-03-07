import React from 'react';
import { Text, ScrollView, Pressable, Image, View } from 'react-native';
import TabHeader from 'components/section/TabHeader';
import { customColors, defaultStyle, text } from 'utils/stylesUtil';
import { useNavigation } from '@react-navigation/native';
import SlideView from 'components/elements/SlideView';

export default function Main() {
  const { flex } = defaultStyle;
  const navigation = useNavigation<RootStackkNavigationProps>();
  return (
    <View style={[flex]}>
      <TabHeader
        tab={['정보', '경매']}
        onChangeTab={(tab) => console.log('tab', tab)}
        rightButton={
          <Pressable onPress={() => navigation.push('Write')}>
            <Image
              style={{ tintColor: customColors.main }}
              source={require('assets/images/notifications.png')}
            />
          </Pressable>
        }>
        <Text style={text(20)}>메인</Text>
      </TabHeader>
      <View style={flex}>
        <SlideView>
          <View />
          <View />
          <View />
        </SlideView>
        <View />
      </View>
    </View>
  );
}
