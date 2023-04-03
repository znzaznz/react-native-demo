import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';
import {
  login_button,
  login_button_icon,
} from '../../screens/auth_screens/login_styles';
import IconFont from '../../plugin/IconFont';

const LoginWithQQ = () => {
  return (
    <Button
      icon={
        <IconFont
          style={{...login_button_icon, fontSize: 20}}
          name={'icon-QQ1'}
        />
      }
      title={'用qq登录'}
      containerStyle={{marginVertical: 20}}
      buttonStyle={{backgroundColor: '#33b4ce'}}
      {...login_button}
    />
  );
};

export default LoginWithQQ;
