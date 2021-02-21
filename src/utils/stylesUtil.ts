import {
  StyleSheet,
  Dimensions,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export const REM = Dimensions.get('window').width / 414;
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const customColors = {
  main: 'rgb(133,208,222)',
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function customStyle<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): ObjectType | T {
  return StyleSheet.create(styles);
}

export const defaultStyle = customStyle({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  between: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  textCenter: {
    textAlign: 'center',
  },
});

type StyleParam =
  | keyof typeof defaultStyle
  | ViewStyle
  | TextStyle
  | ImageStyle;

export function styles(params: (StyleParam | undefined)[]): any {
  return params.map((param) => {
    if (!param) {
      return;
    }
    if (typeof param === 'string') {
      return defaultStyle[param];
    } else {
      const { style } = customStyle({
        style: param,
      });
      return style;
    }
  });
}

export function width(number: number) {
  const { style } = customStyle({
    style: {
      width: number * REM,
    },
  });
  return style;
}

export function height(number: number) {
  const { style } = customStyle({
    style: {
      height: number * REM,
    },
  });
  return style;
}

export function background(color: string) {
  const { style } = customStyle({
    style: {
      backgroundColor: color,
    },
  });
  return style;
}

export function square(width: number, height: number) {
  const { style } = customStyle({
    style: {
      width: width * REM,
      height: height * REM,
    },
  });
  return style;
}

export function margin(
  props:
    | {
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      }
    | number,
) {
  let style;
  if (typeof props === 'number') {
    ({ style } = customStyle({
      style: {
        margin: props * REM,
      },
    }));
  } else {
    const { top, bottom, right, left } = props;
    ({ style } = customStyle({
      style: {
        marginTop: top ? top * REM : undefined,
        marginBottom: bottom ? bottom * REM : undefined,
        marginRight: right ? right * REM : undefined,
        marginLeft: left ? left * REM : undefined,
      },
    }));
  }
  return style;
}

export function padding(
  props:
    | {
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      }
    | number,
) {
  let style: ObjectType;
  if (typeof props === 'number') {
    ({ style } = customStyle({
      style: {
        padding: props * REM,
      },
    }));
  } else {
    const { top, bottom, right, left } = props;
    ({ style } = customStyle({
      style: {
        paddingTop: top ? top * REM : undefined,
        paddingBottom: bottom ? bottom * REM : undefined,
        paddingRight: right ? right * REM : undefined,
        paddingLeft: left ? left * REM : undefined,
      },
    }));
  }
  return style;
}

export function movePosition({
  top,
  bottom,
  left,
  right,
}: {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}) {
  const { style } = customStyle({
    style: {
      top: top ? top * REM : undefined,
      bottom: bottom ? bottom * REM : undefined,
      left: left ? left * REM : undefined,
      right: right ? right * REM : undefined,
    },
  });
  return style;
}

export function border({
  width,
  radius,
  color,
}: {
  width?: number;
  radius?: number;
  color?: string;
}) {
  const { style } = customStyle({
    style: {
      borderWidth: (width || 1) * REM,
      borderRadius: (radius || 0) * REM,
      borderColor: color || '#000',
    },
  });
  return style;
}

export function text(
  props:
    | {
        size: number;
        weight?: 'Regular' | 'Medium' | 'Light' | 'Bold';
        color?: string;
      }
    | number,
) {
  if (typeof props !== 'number') {
    const { size, weight, color } = props;
    const { style } = customStyle({
      style: {
        fontSize: size * REM,
        lineHeight: size * REM * 1.1,
        fontFamily: weight || 'Regular',
        color: color || '#000',
      },
    });
    return style;
  }
  const { style } = customStyle({
    style: {
      fontSize: props * REM,
      lineHeight: props * REM * 1.1,
      fontFamily: 'Regular',
      color: '#000',
    },
  });
  return style;
}
