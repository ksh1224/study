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
  gray: 'rgb(220, 220, 220)',
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function customStyle<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): ObjectType | T {
  return StyleSheet.create(styles);
}

export const defaultStyle = customStyle({
  // 해당 영역 채우기
  flex: {
    flex: 1,
  },
  // 중앙 정렬
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 세로 양끝 정렬
  between: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // 가로 양끝 정렬
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // 가로 배치
  row: {
    flexDirection: 'row',
  },
  // 위치 절대값
  absolute: {
    position: 'absolute',
  },
  // 위치 상대값
  relative: {
    position: 'relative',
  },
  // 폭 100%
  w100: {
    width: '100%',
  },
  // 높이 100%
  h100: {
    height: '100%',
  },
  // 텍스트 중앙 정렬
  textCenter: {
    textAlign: 'center',
  },
});

type StyleParam =
  | keyof typeof defaultStyle
  | ViewStyle
  | TextStyle
  | ImageStyle;

// 중복 스타일 (기본, 커스텀)
export function styles(params: StyleParam | (StyleParam | undefined)[]): any {
  if (Array.isArray(params)) {
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
  } else {
    if (typeof params === 'string') {
      return defaultStyle[params];
    } else {
      const { style } = customStyle({
        style: params,
      });
      return style;
    }
  }
}
// 폭 길이
export function width(number: number | string) {
  const { style } = customStyle({
    style: {
      width: typeof number === 'string' ? number : number * REM,
    },
  });
  return style;
}
// 높이 길이
export function height(number: number | string) {
  const { style } = customStyle({
    style: {
      height: typeof number === 'string' ? number : number * REM,
    },
  });
  return style;
}
// 백그라운드 컬러
export function background(color: string) {
  const { style } = customStyle({
    style: {
      backgroundColor: color,
    },
  });
  return style;
}
// 폭, 높이 길이
export function square(width: number | string, height?: number | string) {
  const { style } = customStyle({
    style: {
      width: typeof width === 'string' ? width : width * REM,
      height: height
        ? typeof height === 'string'
          ? height
          : height * REM
        : typeof width === 'string'
        ? width
        : width * REM,
    },
  });
  return style;
}
// 마진
export function margin(
  props:
    | {
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      }
    | number,
  props2?: number,
) {
  let style;
  if (typeof props === 'number') {
    if (props2) {
      ({ style } = customStyle({
        style: {
          marginTop: props,
          marginBottom: props,
          marginRight: props2,
          marginLeft: props2,
        },
      }));
    } else {
      ({ style } = customStyle({
        style: {
          margin: props * REM,
        },
      }));
    }
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
// 패딩
export function padding(
  props:
    | {
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      }
    | number,
  props2?: number,
) {
  let style: ObjectType;
  if (typeof props === 'number') {
    if (props2) {
      ({ style } = customStyle({
        style: {
          paddingTop: props,
          paddingBottom: props,
          paddingRight: props2,
          paddingLeft: props2,
        },
      }));
    } else {
      ({ style } = customStyle({
        style: {
          padding: props * REM,
        },
      }));
    }
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
// 위치 지정
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
// 경계
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
// 텍스트
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
