/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CheckBox, ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider>
          <CheckBox checked size={30} />
          <Text>你好，写代码了</Text>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
