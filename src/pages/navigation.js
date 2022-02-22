import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import home from './schedule/home'
import service from './schedule/service'

const Tab = createBottomTabNavigator();
const pages = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: { backgroundColor: '#4abe8c' }, activeTintColor: '#818181', inactiveTintColor: '#505050' }}>
      <Tab.Screen name="Home" component={HomeStackScreen}/>
      <Tab.Screen name="Requests" component={service} />
      <Tab.Screen name="Profile" component={service} />
    </Tab.Navigator>
  );
}
export default pages;

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="schedule" component={home} options={{headerShown: false}}/>
      <HomeStack.Screen name="service" component={service} options={{headerShown: false}}/>
    </HomeStack.Navigator>
  )
}