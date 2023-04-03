import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Image, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {nanoid} from 'nanoid';
import {homePageSwiper} from '@/utils/common';
import {colors} from '@/assets/styles/styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login_screen}>
      <View>
        <Text h4 h4Style={{...styles.header, marginTop: 15}}>
          发现你心仪的餐厅
        </Text>
        <Text h4 h4Style={styles.header}>
          在你的身边
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Swiper removeClippedSubviews={false} loop>
          {homePageSwiper.map(i => (
            <View testID="Hello" key={nanoid(5)} style={styles.slide1}>
              <Image
                source={i.source}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.button_container}>
        <Button
          onPress={() => {
            navigation.navigate({
              name: 'LoginState',
            });
          }}
          buttonStyle={{borderRadius: 5}}
          size={'lg'}
          title={'登录用户'}
        />
        <Button
          onPress={() => {
            console.log('点击登录');
          }}
          size={'lg'}
          type={'outline'}
          buttonStyle={styles.create_user}
          title={'新建用户'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_screen: {
    // height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    color: colors.primary_color,
    textAlign: 'center',
    marginTop: 5,
  },
  create_user: {
    borderRadius: 5,
    marginVertical: 20,
  },
  wrapper: {
    height: 270,
  },
  button_container: {
    marginHorizontal: 20,
  },
});

export default LoginScreen;
