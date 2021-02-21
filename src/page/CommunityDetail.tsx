import { useNavigation } from '@react-navigation/native';
import Header from 'components/section/Header';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from 'utils/stylesUtil';

export default function CommunityDetail() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles(['flex'])}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <Text>CommunityDetail</Text>
    </View>
  );
}
