import Header from 'components/section/Header';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'utils/stylesUtil';
import { useNavigation } from '@react-navigation/native';

export default function Notifications() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles('flex')}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <Text>Notification</Text>
    </View>
  );
}
