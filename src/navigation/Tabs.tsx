import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {CharacterScreen} from '../screens/Character';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LocationScreen} from '../screens/Location/Location';

import {EpisodeScreen} from '../screens/Episode';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="CharacterScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e89ac7',
        tabBarInactiveTintColor: '#44281d',
      }}>
      <Tab.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="planet" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="users" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EpisodeScreen"
        component={EpisodeScreen}
        options={{
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
    // position: 'absolute',
    backgroundColor: '#97ce4c',
    // borderTopWidth: 0,
    // bottom: 20,
    // left: 10,
    // right: 10,
    // paddingBottom: 1,
    // borderRadius: 20,
  },
});

export default Tabs;
