import { useNavigation } from '@react-navigation/native';
import Header from 'components/section/Header';
import React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { customColors, REM } from 'utils/stylesUtil';
import { Picker } from '@react-native-picker/picker';

const pictureSize = 200;

export default function Write() {
  const navigation = useNavigation<RootStackkNavigationProps>();

  return (
    <View style={styles.flex}>
      <Header
        back={() => {
          navigation.goBack();
        }}
        rightButton={
          <Pressable onPress={() => console.log('update')}>
            <Text style={styles.buttonText}>생성</Text>
          </Pressable>
        }
      />

      <View style={styles.pictureWrap}>
        <ScrollView horizontal>
          <Image
            style={styles.picture}
            source={{
              uri:
                'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri:
                'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri:
                'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri:
                'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri:
                'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.body}>
        <TextInput style={styles.box} placeholder="상품명" />

        {/*  주소 */}

        <View style={[styles.box, { padding: 0 }]}>
          <Picker style={styles.flex}>
            <Picker.Item label="테스트" value="test" />
            <Picker.Item label="카테고리" value={0} />
          </Picker>
        </View>

        <View style={styles.box}>
          <Text>이름</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18 * REM,
    color: customColors.main,
    fontFamily: 'Bold',
  },
  body: {
    flex: 1,
    padding: 20 * REM,
  },
  box: {
    width: '100%',
    height: 43 * REM,
    borderColor: 'rgb(198,198,198)',
    borderWidth: 1 * REM,
    borderRadius: 11 * REM,
    marginBottom: 20 * REM,
    padding: 10 * REM,
  },
  pictureWrap: {
    width: '100%',
    height: pictureSize * REM,
  },
  picture: {
    width: pictureSize * REM,
    height: pictureSize * REM,
    borderRadius: 11 * REM,
  },
});
