import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/section/Header';
import { styles } from 'utils/stylesUtil';

interface Props {
  navigation: RootStackkNavigationProps;
}

export default function Chat({ navigation }: Props) {
  return (
    <View style={styles(['flex'])}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <Text>Chat</Text>
    </View>
  );
}
