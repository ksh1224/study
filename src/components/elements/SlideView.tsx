import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  background,
  styles,
  deviceWidth,
  REM,
  defaultStyle,
} from 'utils/stylesUtil';

interface Props {
  children: JSX.Element[];
  width?: number;
  page?: number;
}

const { h100, absolute, row } = defaultStyle;

let specify = 0;
let time: number;

export default function SlideView({ children, width, page }: Props) {
  const vw = width ? width * REM : deviceWidth;
  const totalWidth = vw * children.length;
  const gesture = useRef(new Animated.Value(0)).current;
  const positon = useRef(new Animated.Value(0)).current;
  const [status, setStatus] = useState<'STOP' | 'START' | 'Gesture'>('START');

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
      Animated.timing(positon, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (currentPosition <= -vw * (children.length - 1)) {
      console.log('currentPosition', currentPosition);
      Animated.timing(positon, {
        toValue: -vw * (children.length - 1),
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (status === 'STOP' && currentPosition !== specify) {
      time = new Date().getTime() - time;
      if (time < 150) {
        let toValue = 0;
        if (value > 0) {
          console.log('back');
          toValue = specify + vw;
        } else {
          console.log('go');
          toValue = specify - vw;
        }
        Animated.timing(positon, {
          toValue,
          duration: 150,
          useNativeDriver: true,
        }).start();
        specify = toValue;
      } else {
        Animated.timing(positon, {
          toValue: vw * Math.round(currentPosition / vw),
          duration: 100,
          useNativeDriver: true,
        }).start();
        specify = vw * Math.round(currentPosition / vw);
      }
    }
  });

  // positon.addListener(({ value }) => {
  //   if (value > 0) {
  //     positon.setValue(0);
  //     specify = 0;
  //     move = 0;
  //   }
  // });

  useEffect(() => {
    if (status === 'START') {
      time = new Date().getTime();
    }
  }, [status]);

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
          <View
            key={i}
            style={styles([
              'h100',
              { width: vw },
              background(i === 1 ? '#fff' : '#000'),
            ])}>
            {jsx}
          </View>
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
}
