import React from 'react';
import { Image, Pressable, View } from 'react-native';
import {
  customColors,
  height,
  movePosition,
  padding,
  REM,
  styles,
} from 'utils/stylesUtil';

interface Props {
  back?: () => void;
  children?: JSX.Element | JSX.Element[];
  rightButton?: JSX.Element;
  hideLine?: boolean;
}

export default function Header({
  back,
  children,
  rightButton,
  hideLine,
}: Props) {
  return (
    <View style={styles('w100')}>
      <View
        style={styles([
          'w100',
          'center',
          padding({ left: 20, right: 20 }),
          height(75),
          !hideLine && {
            borderBottomColor: customColors.main,
            borderBottomWidth: 1 * REM,
          },
        ])}>
        {back && (
          <Pressable
            style={styles(['absolute', movePosition({ left: 20 })])}
            onPress={() => back()}>
            <Image source={require('assets/images/back.png')} />
          </Pressable>
        )}
        {children}
        <View style={styles(['absolute', movePosition({ right: 20 })])}>
          {rightButton}
        </View>
      </View>
    </View>
  );
}
