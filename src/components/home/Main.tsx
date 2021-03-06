import React from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import TabHeader from 'components/section/TabHeader';
import {
  background,
  customColors,
  defaultStyle,
  styles,
  text,
} from 'utils/stylesUtil';
import SlideView from 'components/elements/SlideView';

interface Props {
  navigation: RootStackkNavigationProps;
}

export default function Main({ navigation }: Props) {
  const { flex } = defaultStyle;
  return (
    <View style={flex}>
      <TabHeader
        tab={['정보', '경매']}
        onChangeTab={(tab) => console.log('tab', tab)}
        rightButton={
          <Pressable onPress={() => navigation.push('Notifications')}>
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
        </SlideView>
      </View>
    </View>
  );
}
