import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../global/styles';
import {Icon, Text} from '@rneui/themed';
import IconSet from '../plugin/IconSet';

const Header = () => {
  return (
    <View style={styles.header}>
      <IconSet name={'icon-yuechi'} />
      <Text style={styles.header_text}>1231</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_color,
    height: 50,
  },
  header_text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
