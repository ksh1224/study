import { useNavigation } from '@react-navigation/native';
import Header from 'components/section/Header';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'utils/stylesUtil';

export default function Chat() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles('flex')}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <Text>Chat</Text>
    </View>
  );
}
