import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetails} from '../screens/CharacterDetails';
import {LocationDetail} from '../screens/LocationDetail';
import {Character} from '../types/character';
import Tabs from './Tabs';

export type RootStackParamList = {
  Home: undefined;
  CharacterDetails: {data: Character};
  LocationDetail: undefined;
};

export function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
