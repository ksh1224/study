import React, { forwardRef } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
} from 'react-native';
import {
  padding as pad,
  border as bor,
  square,
  styles,
  customColors,
} from 'utils/stylesUtil';

interface Props {
  width?: string | number;
  height?: string | number;
  padding?: number;
  border?: {
    width?: number;
    radius?: number;
    color?: string;
  };
  value?: string;
  placeholder?: string;
  visible?: boolean;
  onChange?: (text: string) => void;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  style?: StyleProp<TextStyle>;
  password?: boolean;
}

export default forwardRef<TextInput, Props>(
  (
    {
      width = '100%',
      height = 43,
      padding = 10,
      onChange,
      border = { color: customColors.gray, width: 1, radius: 10 },
      value,
      placeholder,
      rightIcon,
      leftIcon,
      style,
      password,
    },
    ref,
  ) => {
    return (
      <View
        style={styles([
          'center',
          'row',
          square(width, height),
          pad(padding),
          bor({ color: customColors.gray, width: 1, radius: 10, ...border }),
          style,
        ])}>
        {leftIcon && (
          <View
            style={styles([
              'center',
              square(20, 20),
              pad({ left: 10, right: 20 }),
            ])}>
            <Image source={leftIcon} />
          </View>
        )}
        <TextInput
          ref={ref}
          style={styles('flex')}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          secureTextEntry={password}
        />
        {rightIcon && (
          <View
            style={styles([
              'center',
              square(20, 20),
              pad({ left: 20, right: 10 }),
            ])}>
            <Image source={rightIcon} />
          </View>
        )}
      </View>
    );
  },
);
