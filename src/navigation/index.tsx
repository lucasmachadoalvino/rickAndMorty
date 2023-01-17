import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetails} from '../screens/CharacterDetails';
import {EpisodeDetails} from '../screens/EpisodeDetails';
import {LocationDetail} from '../screens/LocationDetail';
import {Character} from '../types/character';
import {Episode} from '../types/episodes';
import {Location} from '../types/location';
import Tabs from './Tabs';

export type RootStackParamList = {
  Home: undefined;
  LocationDetail: {data: Location};
  CharacterDetails: {data: Character};
  EpisodeDetails: {data: Episode};
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

        <Stack.Screen name="LocationDetail" component={LocationDetail} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
