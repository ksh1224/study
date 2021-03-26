/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { styles, deviceWidth, REM, defaultStyle } from 'utils/stylesUtil';

interface Props {
  children: JSX.Element[];
  width?: number;
  page?: number;
  onChange?: (pageIndex: number) => void;
}

const { h100, absolute, row } = defaultStyle;

let specify = 0;
let time: number;

export default function SlideView({ children, width, page, onChange }: Props) {
  const vw = width ? width * REM : deviceWidth;
  const totalWidth = vw * children.length;
  const gesture = useRef(new Animated.Value(0)).current;
  const positon = useRef(new Animated.Value(0)).current;
  const [status, setStatus] = useState<'STOP' | 'START' | 'Gesture'>('START');

  const timing = (toValue: number, duration: number) =>
    Animated.timing(positon, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();

  gesture.addListener(({ value }) => {
    const currentPosition = specify + value;
    if (
      currentPosition <= 10 &&
      currentPosition >= -vw * (children.length - 1) - 10
    ) {
      positon.setValue(specify + value);
    }
  });

  gesture.stopAnimation((value) => {
    const currentPosition = specify + value;

    if (currentPosition >= 0) {
      timing(0, 100);
    } else if (currentPosition <= -vw * (children.length - 1)) {
      timing(-vw * (children.length - 1), 100);
    } else if (status === 'STOP' && currentPosition !== specify) {
      time = new Date().getTime() - time;
      if (time < 150) {
        let toValue = 0;
        if (value > 0) {
          toValue = specify + vw;
        } else {
          toValue = specify - vw;
        }
        timing(toValue, 150);
        specify = toValue;
        if (specify !== vw * Math.round(currentPosition / vw) && onChange) {
          onChange(Math.abs(Math.round(specify / vw)));
        }
      } else {
        timing(vw * Math.round(currentPosition / vw), 100);
        if (specify !== vw * Math.round(currentPosition / vw) && onChange) {
          onChange(Math.abs(Math.round(currentPosition / vw)));
        }
        specify = vw * Math.round(currentPosition / vw);
      }
    }
  });

  useEffect(() => {
    if (status === 'START') {
      time = new Date().getTime();
    }
  }, [status]);

  useEffect(() => {
    if (
      typeof page === 'number' &&
      children &&
      page >= 0 &&
      page <= children.length - 1
    ) {
      Animated.timing(positon, {
        toValue: -vw * page,
        duration: 200,
        useNativeDriver: true,
      }).start();
      specify = -vw * page;
    }
  }, [children, page]);

  return (
    <PanGestureHandler
      onHandlerStateChange={({ nativeEvent }) => {
        switch (nativeEvent.state) {
          case 2:
            setStatus('START');
            break;
          case 4:
            setStatus('Gesture');
            break;
          case 5:
            setStatus('STOP');
            break;
          default:
            break;
        }
      }}
      onGestureEvent={({ nativeEvent }) => {
        gesture.setValue(nativeEvent.translationX);
      }}>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: positon,
              },
            ],
          },
          absolute,
          h100,
          row,
          { width: totalWidth },
        ]}>
        {children.map((jsx, i) => (
          <View key={i} style={styles(['h100', { width: vw }])}>
            {jsx}
          </View>
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
}
