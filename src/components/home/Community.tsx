import { useNavigation } from '@react-navigation/core';
import ComunnityListItem from 'components/item/ComunnityListItem';
import Header from 'components/section/Header';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { background, defaultStyle, styles, text } from 'utils/stylesUtil';

// 게시글 데이터
export default function Community() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  const { flex } = defaultStyle;
  return (
    <View style={[flex, background('#FFF0')]}>
      <Header
        rightButton={
          <Pressable onPress={() => navigation.push('Write')}>
            <Image
              style={{ tintColor: '#000' }}
              source={require('assets/images/search.png')}
            />
          </Pressable>
        }>
        <Text style={text(20)}>커뮤니티</Text>
      </Header>
      <ScrollView style={styles('flex')}>
        <ComunnityListItem onPress={() => navigation.push('CommunityDetail')} />
      </ScrollView>
    </View>
  );
}
