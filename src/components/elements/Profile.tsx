import React from 'react';
import { Image, Text, View } from 'react-native';
import { REM, square, styles, border, text } from 'utils/stylesUtil';

interface Props {
  uri?: string;
  name?: string;
  subText?: string;
}

export default function Profile({ uri, name, subText }: Props) {
  return (
    <View style={styles('row')}>
      <View style={{ marginRight: 4 * REM }}>
        <Image
          style={[square(37, 37), border({ color: '#5552', radius: 37 })]}
          source={{ uri }}
        />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={text(16)}>{name}</Text>
        {subText && (
          <Text
            style={[
              text({ size: 12, color: 'rgb(129, 129, 129)' }),
              { top: 3 * REM },
            ]}>
            {subText}
          </Text>
        )}
      </View>
    </View>
  );
}
