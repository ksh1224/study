import React from 'react';
import { Text, ScrollView, Pressable, Image } from 'react-native';
import TabHeader from 'components/section/TabHeader';
import { customColors, defaultStyle, text } from 'utils/stylesUtil';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const { flex } = defaultStyle;
  const navigation = useNavigation<RootStackkNavigationProps>();
  return (
    <ScrollView style={[flex]}>
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
      <Text>Main</Text>
    </ScrollView>
  );
}
