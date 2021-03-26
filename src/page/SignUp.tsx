import Header from 'components/section/Header';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { customColors, REM } from 'utils/stylesUtil';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation<RootStackkNavigationProps>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.flex}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      {image ? (
        <Pressable onPress={pickImage}>
          <Image style={styles.profile} source={{ uri: image }} />
        </Pressable>
      ) : (
        <Pressable onPress={pickImage} style={styles.profile}>
          <Image
            style={styles.picture}
            source={require('assets/images/picture.png')}
          />
        </Pressable>
      )}
      <Text>SignUp</Text>
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
    borderColor: customColors.gray,
    borderWidth: 1 * REM,
    borderRadius: 11 * REM,
    marginBottom: 20 * REM,
    padding: 10 * REM,
  },
  pictureWrap: {
    width: '100%',
    height: 100 * REM,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100 * REM,
    height: 100 * REM,
    borderRadius: 11 * REM,
    borderColor: customColors.gray,
    borderWidth: 1 * REM,
  },
  picture: {
    width: 67 * REM,
    height: 59 * REM,
    tintColor: customColors.gray,
  },
});
