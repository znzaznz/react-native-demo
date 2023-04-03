import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {route} from './route';

const Stack = createStackNavigator();

const RouterContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {route.map(r => (
          <Stack.Screen
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            key={r.name}
            name={r.name}
            component={r.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterContainer;
