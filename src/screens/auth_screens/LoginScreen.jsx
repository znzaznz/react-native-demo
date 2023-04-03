import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Image, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>这是登录界面</Text>
      <Text style={styles.text1}>这是swiper</Text>
      <View style={styles.wrapper}>
        <Swiper removeClippedSubviews={false} showsButtons loop autoplay={true}>
          <View
            title={<Text style={styles.text}>Hello Swiper</Text>}
            style={styles.slide1}>
            <Image
              source={require('../../assets/img/img.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View testID="Beautiful" style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View testID="Simple" style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
      <Button
        onPress={() => {
          navigation.navigate({
            name: 'LoginState',
          });
        }}
        title={'跳转到登录'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    width: '100%',
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
