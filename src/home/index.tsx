import React from 'react';
import { View } from 'react-native';
import HomeNavigation from 'navigations/HomeNavigation';
import { background, styles } from 'utils/stylesUtil';

export default function Home() {
  return (
    <View style={styles(['h100', 'w100', background('#FFF')])}>
      <HomeNavigation />
    </View>
  );
}
