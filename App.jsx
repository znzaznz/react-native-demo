/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, CheckBox, Icon} from '@rneui/base';
import {createTheme, ThemeProvider} from '@rneui/themed';
import 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

function App() {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const theme = createTheme({
    lightColors: {
      primary: '#f40202',
    },
    darkColors: {
      primary: '#b71212',
    },
    mode: 'light',
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Icon name="rowing" />
        <Animatable.Text
          animation="slideInDown"
          duration={1000}
          iterationCount={'infinite'}
          direction="alternate">
          你好，抄袭了
        </Animatable.Text>
        <CheckBox checked disabled title="Label" />
        <CheckBox
          checked={checked}
          checkedIcon="heart"
          uncheckedIcon="heart-o"
          checkedColor="red"
          onPress={toggleCheckbox}
        />
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
        <Text>大家好我是vue</Text>
        <Button title={'My Button'} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
