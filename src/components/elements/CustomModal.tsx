import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { background, styles } from 'utils/stylesUtil';

interface Props {
  visible?: boolean;
  close?: () => void;
  children: JSX.Element;
}

export default function CustomModal({
  visible = false,
  close = () => {},
  children,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      hardwareAccelerated>
      <View style={styles('flex')}>
        <Pressable
          onPress={close}
          style={styles(['flex', 'center', background('#0005')])}>
          <Pressable onPress={() => {}}>{children}</Pressable>
        </Pressable>
      </View>
    </Modal>
  );
}
