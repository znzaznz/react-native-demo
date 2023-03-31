import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>这是登录界面</Text>
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

const styles = StyleSheet.create({});

export default LoginScreen;
