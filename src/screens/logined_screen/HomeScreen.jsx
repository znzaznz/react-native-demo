import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, withBadge} from '@rneui/themed';
import IconFont from '../../plugin/IconFont';
import {Drawer} from 'react-native-drawer-layout';

const HomeScreen = () => {
  const BadgeIcon = withBadge(12)(IconFont);
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}>
      <View style={styles.home_screen}>
        <IconFont name={'icon-hanbaobao'} />
        <Text>hi gays</Text>
        <BadgeIcon name={'icon-hanbaobao'} />
        <Button
          onPress={() => setOpen(prevOpen => !prevOpen)}
          title={`${open ? 'Close' : 'Open'} drawer`}
        />
        <Text>1231</Text>
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  home_screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    borderWidth: 3,
  },
});

export default HomeScreen;
