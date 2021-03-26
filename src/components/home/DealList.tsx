import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Input from 'components/elements/Input';
import DealListItem from 'components/item/DealListItem';
import Header from 'components/section/Header';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import {
  background,
  customColors,
  defaultStyle,
  REM,
  square,
  styles,
  text,
  width,
} from 'utils/stylesUtil';
import Selecter from 'components/elements/Selecter';

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
        <View style={[width(200), styles('h100')]}>
          <Selecter
            options={[
              { name: '진행중', value: 'IN_PROGRESS' },
              { name: '거래 완료', value: 'COMPLETE' },
            ]}
          />
        </View>
      </Header>
      <View
        style={styles([
          square('100%', 68),
          'row',
          'center',
          {
            borderBottomColor: 'rgb(200,200,200)',
            borderBottomWidth: 1 * REM,
            paddingHorizontal: 20 * REM,
          },
        ])}>
        <Input
          leftIcon={require('assets/images/search.png')}
          style={background('rgb(244,244,244)')}
          border={{ color: '#fff0' }}
          width="100%"
          value=""
        />
      </View>
      <ScrollView style={styles('flex')}>
        <DealListItem />
      </ScrollView>
    </View>
  );
}
