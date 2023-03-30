/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CheckBox, createTheme, ThemeProvider, Button} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import Header from './components/Header';

const theme = createTheme({
  lightColors: {
    primary: '#899656',
  },
  darkColors: {
    primary: '#344512',
  },
  mode: 'light',
});

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <CheckBox checked size={30} />
          <Button title={'按钮'} />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
