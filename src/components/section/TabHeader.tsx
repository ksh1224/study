/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import {
  customColors,
  height,
  movePosition,
  padding,
  REM,
  styles,
  text,
} from 'utils/stylesUtil';

type Props = {
  back?: () => void;
  children?: JSX.Element | JSX.Element[];
  rightButton?: JSX.Element;
  tab: string[];
  onChangeTab?: ({ tab, index }: { tab: string; index: number }) => void;
};

export default function TabHeader({
  back,
  children,
  rightButton,
  tab,
  onChangeTab,
}: Props) {
  const [selectTab, setSelectTab] = useState(0);

  useEffect(() => {
    if (onChangeTab) {
      onChangeTab({
        tab: tab[selectTab],
        index: selectTab,
      });
    }
  }, [selectTab]);

  return (
    <View style={styles(['w100'])}>
      <View
        style={styles([
          'w100',
          'center',
          height(105),
          {
            borderBottomColor: customColors.main,
            borderBottomWidth: 2 * REM,
          },
        ])}>
        <View style={styles(['w100', 'flex', 'center', padding({ top: 10 })])}>
          {back && (
            <Pressable
              style={styles(['absolute', movePosition({ left: 20 })])}
              onPress={() => back()}>
              <Image source={require('assets/images/back.png')} />
            </Pressable>
          )}

          {children}
          <View
            style={styles([
              'absolute',
              movePosition({ right: 20 }),
              padding({ top: 10 }),
            ])}>
            {rightButton}
          </View>
        </View>
        <View style={styles(['w100', 'center', 'rowBetween', height(40)])}>
          {tab.map((tabName, i) => (
            <Pressable
              style={styles([
                'flex',
                'center',
                'h100',
                selectTab === i
                  ? {
                      borderBottomColor: customColors.main,
                      borderBottomWidth: 2 * REM,
                    }
                  : undefined,
              ])}
              onPress={() => setSelectTab(i)}>
              <Text style={text(16)}>{tabName}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
