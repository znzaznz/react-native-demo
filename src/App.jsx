/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from './global/styles';
import SignScreen from './screens/auth_screens/SignScreen';

const theme = createTheme({
  lightColors: {
    primary: colors.primary_color,
  },
  mode: 'light',
});

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={colors.primary_color} />
          <SignScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
