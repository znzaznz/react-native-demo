import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../global/styles';
import {Button, Text} from '@rneui/themed';
import IconFont from '../plugin/IconSet';

const Header = ({title, iconName}) => {
  return (
    <View style={styles.header}>
      <Button icon={<IconFont style={styles.icon} name={iconName} />} />
      <Text h4 style={styles.header_text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_color,
    height: 54,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 35,
    marginLeft: 5,
    marginRight: 5,
  },
  header_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
