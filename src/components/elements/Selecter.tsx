import React, { useEffect, useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  REM,
  square,
  styles,
  border,
  text,
  deviceHeight,
  deviceWidth,
  width,
  background,
  height,
  margin,
} from 'utils/stylesUtil';
import CustomModal from './CustomModal';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  value?: string;
  options: {
    name: string;
    value?: string;
  }[];
  onChange?: (e: { name: string; value: string }) => void;
}

export default function Selecter({ value, options, onChange }: Props) {
  const [visible, setVisible] = useState(false);
  const [selectOption, setSelectOption] = useState<{
    name: string;
    value: string;
  }>();

  useEffect(() => {
    if (value && selectOption?.value !== value) {
      const target = options.find((findOption) => findOption.value === value);
      setSelectOption(target);
    }
  }, [options, value, selectOption]);

  const select = (target: { name: string; value: string }) => {
    setVisible(false);
    setSelectOption(target);
    if (onChange) {
      onChange(target);
    }
  };

  const list = options.map((option) => (
    <Pressable
      style={[
        width('100%'),
        height(50),
        background('#fff'),
        border({ color: '#fff0', width: 1 }),
        styles('center'),
      ]}
      onPress={() => select(option)}>
      <Text style={text(18)}>{option.name}</Text>
    </Pressable>
  ));

  return (
    <>
      <Pressable
        style={styles(['flex', 'center', 'row'])}
        onPress={() => options.length !== 0 && setVisible(true)}>
        <Text style={text(18)}>{selectOption?.name || '선택'}</Text>
        <Image
          style={[width(10), height(6), margin({ left: 5, bottom: 2 })]}
          source={require('assets/images/drop.png')}
        />
      </Pressable>
      <CustomModal visible={visible} close={() => setVisible(false)}>
        <View
          style={styles({
            width: deviceWidth * 0.9,
            backgroundColor: '#fff',
          })}>
          {options.length * 50 * REM > deviceHeight * 0.9 ? (
            <ScrollView
              style={[
                {
                  width: deviceWidth * 0.9,
                  height: deviceHeight * 0.9,
                },
              ]}>
              {list}
            </ScrollView>
          ) : (
            list
          )}
        </View>
      </CustomModal>
    </>
  );
}
