/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {colors} from './global/styles';
import RouterContainer from './router/RouterContainer';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

const theme = createTheme({
  lightColors: {
    primary: colors.primary_color,
  },
  mode: 'light',
});

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={colors.primary_color} />
        <RouterContainer />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
