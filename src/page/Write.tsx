import { useNavigation } from '@react-navigation/native';
import Header from 'components/section/Header';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { customColors, padding, styles, text } from 'utils/stylesUtil';

export default function Write() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles(['flex'])}>
      <Header
        back={() => {
          navigation.goBack();
        }}
        rightButton={
          <Pressable onPress={() => console.log('update')}>
            <Text
              style={styles([
                text({ size: 18, color: customColors.main, weight: 'Bold' }),
              ])}>
              생성
            </Text>
          </Pressable>
        }
      />
      <View style={styles(['flex', padding(20)])}>
        <TextInput />
      </View>
    </View>
  );
}
