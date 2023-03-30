import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../global/styles';
import {Text} from '@rneui/themed';
import IconFont from '../plugin/IconSet';

const Header = () => {
  return (
    <View style={styles.header}>
      <IconFont style={styles.icon} name={'icon-jiantou_xiangzuo'} />
      <Text style={styles.header_text}>MY ACCOUNT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_color,
    height: 60,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 40,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 20,
  },
  header_text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
