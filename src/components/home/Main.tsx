import React, { createRef, useEffect, useState } from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import TabHeader from 'components/section/TabHeader';
import { customColors, defaultStyle, styles, text } from 'utils/stylesUtil';
import { useNavigation } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';

export default function Main() {
  const { flex } = defaultStyle;
  const navigation = useNavigation<RootStackkNavigationProps>();
  const viewPagerRef = createRef<ViewPager>();
  const [page, setPage] = useState(0);

  //api call
  useEffect(() => {}, []);

  useEffect(() => {
    viewPagerRef?.current?.setPage(page);
  }, [page, viewPagerRef]);
  return (
    <View style={styles('flex')}>
      <TabHeader
        tab={['정보', '경매']}
        onChangeTab={({ index }) => setPage(index)}
        value={page}
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
        <ViewPager
          ref={viewPagerRef}
          style={flex}
          initialPage={page}
          onPageSelected={({ nativeEvent }) => setPage(nativeEvent.position)}>
          <View>
            {/* 분리수거 데이터 */}
            <Text>정보</Text>
          </View>
          <View>
            {/* 경매 데이터 */}
            <Text>경매</Text>
          </View>
        </ViewPager>
        <View />
      </View>
    </View>
  );
}
