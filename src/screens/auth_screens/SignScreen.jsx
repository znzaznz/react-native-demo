import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '@/assets/styles/styles';
import Header from '@/components/Header';
import {Button, Text} from '@rneui/themed';
import * as Animatable from 'react-native-animatable';
import IconFont from '../../plugin/IconFont';
import LoginWithWechat from '@/components/loginWays/LoginWithWechat';
import {login_button} from './login_styles';
import LoginWithQQ from '@/components/loginWays/LoginWithQQ';

const SignScreen = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassWord, setShowPassWord] = useState(false);

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
            <Animatable.Text
              style={{marginTop: -4}}
              animation={isFocus ? 'swing' : ''}
              duration={1000}>
              <IconFont name={'icon-suoding'} />
            </Animatable.Text>
            <TextInput
              secureTextEntry={!showPassWord}
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              style={{width: '80%'}}
              placeholder={'密码'}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassWord(!showPassWord);
              }}>
              <Animatable.Text
                animation={isFocus ? 'swing' : ''}
                duration={1000}>
                <IconFont
                  style={{fontSize: 20}}
                  name={
                    showPassWord ? 'icon-icon_yincang' : 'icon-baojingyincang'
                  }
                />
              </Animatable.Text>
            </TouchableOpacity>
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
    fontSize: 19,
  },
  note: {
    color: colors.grey,
    marginBottom: 7,
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 15,
    marginTop: 15,
    height: 40,
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
