import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, withBadge} from '@rneui/themed';
import IconFont from '../../plugin/IconFont';

const HomeScreen = () => {
  const BadgeIcon = withBadge(12)(IconFont);
  return (
    <View style={styles.home_screen}>
      <IconFont name={'icon-hanbaobao'} />
      <Text>hi gays</Text>
      <BadgeIcon name={'icon-hanbaobao'} />
    </View>
  );
};

const styles = StyleSheet.create({
  home_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
