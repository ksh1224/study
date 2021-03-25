import { useNavigation } from '@react-navigation/native';
import Profile from 'components/elements/Profile';
import Header from 'components/section/Header';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  background,
  margin,
  padding,
  square,
  styles,
  text,
  REM,
  border,
} from 'utils/stylesUtil';

export default function CommunityDetail() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles('flex')}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <View style={styles('flex')}>
        <ScrollView>
          <View>
            <View style={[padding(10, 20), styles('rowBetween')]}>
              <View>
                <Text style={[text(14), margin({ bottom: 5 })]}>주제</Text>
                <Profile name="퓅퓅" subText="1시간 전" />
              </View>
              <Image
                style={square(3.5, 17.5)}
                source={require('assets/images/menu.png')}
              />
            </View>
            <Text
              style={[text(18), padding({ right: 20, left: 20, bottom: 10 })]}>
              강남구 의자 빨리 처분합니다.
            </Text>
            <View style={[square('100%', 175), margin({ bottom: 15 })]}>
              <ScrollView
                contentContainerStyle={padding(0, 20)}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {[0, 1, 2, 3, 4].map(() => (
                  <View
                    style={[
                      square(175),
                      background('#000'),
                      margin({ right: 20 }),
                    ]}
                  />
                ))}
              </ScrollView>
            </View>
            <Text
              style={[
                padding(0, 20),
                text(15),
                { lineHeight: 20 * REM },
                margin({ bottom: 30 }),
              ]}>
              장소는 강남구 OO동이고 빨리처분해야하는데 그냥 무료로 드릴게요
              연락주세요
            </Text>
            <View
              style={[
                square('100%', 35),
                styles('row'),
                border({ width: 1, color: 'rgb(177,177,177)' }),
                { borderLeftWidth: 0, borderRightWidth: 0 },
              ]}>
              <View style={styles(['flex', 'center', 'row'])}>
                <Image
                  style={margin({ right: 5 })}
                  source={require('assets/images/heart.png')}
                />
                <Text>18</Text>
              </View>
              <View
                style={[square(1, '100%'), background('rgb(177,177,177)')]}
              />
              <View style={styles(['flex', 'center', 'row'])}>
                <Image
                  style={[margin({ right: 5 }), square(18)]}
                  source={require('assets/images/chatting.png')}
                />
                <Text>채팅</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
