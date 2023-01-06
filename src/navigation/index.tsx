import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tabs';

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
