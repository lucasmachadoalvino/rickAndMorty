import React from 'react';
import {StyleSheet} from 'react-native';
import {CharacterScreen} from '../screens/Character';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LocationScreen} from '../screens/Location';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EpisodeScreen} from '../screens/Episode';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="CharacterScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
        tabBarActiveTintColor: '#e89ac7',
        tabBarInactiveTintColor: '#44281d',
      }}>
      <Tab.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: ({color}) => (
            <Ionicons name="planet" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({color}) => (
            <Icon name="users" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EpisodeScreen"
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="movie" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#97ce4c',
  },
});

export default Tabs;
