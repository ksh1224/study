import { useNavigation } from '@react-navigation/native';
import Header from 'components/section/Header';
import React from 'react';
import { Pressable, Text, View, TextInput } from 'react-native';
import {
  customColors,
  padding,
  styles,
  text,
  height,
  border,
  margin,
} from 'utils/stylesUtil';

export default function Write() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  const box = styles([
    { width: '100%' },
    height(43),
    border({ color: 'rgb(198, 198, 198)', radius: 11, width: 1 }),
    margin({ bottom: 20 }),
  ]);

  return (
    <View style={styles(['flex'])}>
      <Header
        back={() => {
          navigation.goBack();
        }}
        rightButton={
          <Pressable onPress={() => console.log('update')}>
            <Text
              style={styles([
                text({ size: 18, color: customColors.main, weight: 'Bold' }),
              ])}>
              생성
            </Text>
          </Pressable>
        }
      />
      <View style={styles(['flex', padding(20)])}>
        <TextInput style={box} placeholder="이름" />
        <View style={box}>
          <Text>ssss</Text>
        </View>
      </View>
    </View>
  );
}

// import { useNavigation } from '@react-navigation/native';
// import Header from 'components/section/Header';
// import React from 'react';
// import { Pressable, Text, View, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import { customColors, REM } from 'utils/stylesUtil';

// export default function Write() {
//   const navigation = useNavigation<RootStackkNavigationProps>();

//   return (
//     <View style={styles.flex}>
//       <Header
//         back={() => {
//           navigation.goBack();
//         }}
//         rightButton={
//           <Pressable onPress={() => console.log('update')}>
//             <Text style={styles.buttonText}>생성</Text>
//           </Pressable>
//         }
//       />
//       <View style={styles.body}>
//         <TextInput />
//         <View style={styles.box}>
//           <Text>ssss</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },
//   buttonText: {
//     fontSize: 18 * REM,
//     color: customColors.main,
//     fontFamily: 'Bold',
//   },
//   body: {
//     flex: 1,
//     padding: 20 * REM,
//   },
//   box: {
//     width: '100%',
//     height: 43 * REM,
//     borderColor: 'rgb(198,198,198)',
//     borderWidth: 1 * REM,
//     borderRadius: 11 * REM,
//   },
// });
