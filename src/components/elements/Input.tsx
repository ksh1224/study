import React from 'react';
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
  movePosition,
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
  value: string;
  placeholder?: string;
  visible?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  rightIcon?: ImageSourcePropType;
  style?: StyleProp<TextStyle>;
}

export default function Input({
  width = '100%',
  height = 43,
  padding = 10,
  onChange,
  border = { color: customColors.gray, width: 1, radius: 10 },
  value,
  placeholder,
  rightIcon,
  style,
}: Props) {
  return (
    <View style={styles('center')}>
      <TextInput
        style={[
          square(width, height),
          pad(padding),
          bor({ color: customColors.gray, width: 1, radius: 10, ...border }),
          style,
        ]}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {rightIcon && (
        <View
          style={styles([
            'absolute',
            'center',
            square(20, 20),
            movePosition({ right: 10 }),
          ])}>
          <Image source={rightIcon} />
        </View>
      )}
    </View>
  );
}
