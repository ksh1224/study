import { useNavigation } from '@react-navigation/core';
import Input from 'components/elements/Input';
import Header from 'components/section/Header';
import React, { createRef, useEffect, useState } from 'react';
import { Pressable, Text, View, TextInput } from 'react-native';
import {
  background,
  border,
  customColors,
  defaultStyle,
  margin,
  padding,
  square,
  styles,
  text,
} from 'utils/stylesUtil';

// 유저 정보 데이터
export default function UserInfo() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  const [signInData, setSignInData] = useState({
    id: '',
    password: '',
  });
  const { id, password } = signInData;

  return (
    <View style={[styles('flex'), background('#FFF0')]}>
      <Header>
        <Text style={text(20)}>유저 정보</Text>
      </Header>
      <View style={styles(['flex', 'center', padding(40)])}>
        <Input
          style={margin({ bottom: 20 })}
          border={{ color: customColors.main, width: 2 }}
          height={50}
          placeholder="아이디"
          onChange={(idText) => setSignInData({ id: idText, password })}
        />
        <Input
          style={margin({ bottom: 20 })}
          border={{ color: customColors.main, width: 2 }}
          height={50}
          placeholder="비밀번호"
          onChange={(passwordText) =>
            setSignInData({ id, password: passwordText })
          }
          password
        />
        <Pressable
          style={styles([
            'center',
            'row',
            square('100%', 50),
            border({ color: customColors.main, width: 1, radius: 10 }),
            background(customColors.main),
          ])}
          onPress={() => signIn()}>
          <Text style={text({ size: 18, color: '#fff' })}>로그인</Text>
        </Pressable>
        <Pressable
          style={styles([
            'center',
            'row',
            square('100%', 50),
            border({ color: '#0000', width: 1, radius: 10 }),
          ])}
          onPress={() => navigation.push('SignUp')}>
          <Text style={text({ size: 18, color: customColors.main })}>
            회원가입
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
