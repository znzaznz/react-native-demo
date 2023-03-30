import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconFont from '../../plugin/IconSet';
import {
  login_button,
  login_button_icon,
} from '../../screens/auth_screens/login_styles';
import {Button} from '@rneui/themed';

const LoginWithWechat = () => {
  return (
    <Button
      icon={<IconFont style={login_button_icon} name={'icon-weixin'} />}
      title={'用微信登录'}
      buttonStyle={{backgroundColor: 'rgb(7,193,69)'}}
      {...login_button}
    />
  );
};

const styles = StyleSheet.create({});

export default LoginWithWechat;
