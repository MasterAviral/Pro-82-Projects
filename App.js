import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feed from './screens/Feed'
import CreatePost from './screens/CreatePost'
import Profile from './screens/Profile'
import DrawerNavigator from './navigation/DrawerNavigation'
import BottomTabNavigator from './navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
   
 <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>,
    <NavigationContainer>
       <DrawerNavigator/>
    </NavigationContainer>
  );
}

