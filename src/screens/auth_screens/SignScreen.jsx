import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../global/styles';
import Header from '../../components/Header';
import {Button, Text} from '@rneui/themed';
import * as Animatable from 'react-native-animatable';
import IconFont from '../../plugin/IconSet';
import LoginWithWechat from '../../components/loginWays/LoginWithWechat';
import LoginWithQQ from '../../components/loginWays/LoginWithQQ';
import {login_button} from './login_styles';

const SignScreen = () => {
  return (
    <View>
      <Header title={'我的账户'} iconName={'icon-jiantou_xiangzuo'} />
      <View style={styles.signScreenMain}>
        <Text style={styles.signIn}>登录</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.note}>请输入您的email账号和密码</Text>
          <Text style={styles.note}>登录您的账户</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput style={styles.input} placeholder={'Email'} />
          <View style={{...styles.input, ...styles.input2}}>
            <Animatable.Text>
              <IconFont name={'icon-suoding'} />
            </Animatable.Text>
            <TextInput style={{width: '80%'}} placeholder={'密码'} />
            <Animatable.Text>
              <IconFont style={{fontSize: 24}} name={'icon-baojingyincang'} />
            </Animatable.Text>
          </View>
        </View>
        <Button
          containerStyle={{marginVertical: 10}}
          title={'登录'}
          {...login_button}
        />
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text style={styles.forPassWord}>忘记密码？</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 18, marginBottom: 40}}>
          <Text style={styles.other}>或者</Text>
        </View>
        <LoginWithWechat />
        <LoginWithQQ />
        <View style={{marginTop: 10}}>
          <Text>第一次使用？</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Button
              buttonStyle={{width: 140}}
              type={'outline'}
              title={'新建用户'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signScreenMain: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  signIn: {
    color: colors.primary_color,
    fontSize: 22,
  },
  note: {
    color: colors.grey,
    marginBottom: 7,
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 15,
    marginTop: 20,
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  input2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forPassWord: {
    color: colors.dark_grey,
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  other: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default SignScreen;
