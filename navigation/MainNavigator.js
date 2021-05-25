import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import MarkedNavigator from './MarkedNavigator';
import UsedNavigator from './UsedNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'Used') {
              iconName = focused ? 'md-book' : 'md-book-outline';
            } else if (route.name === 'Marked') {
              iconName = focused ? 'md-star' : 'md-star-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name ="Home" component={HomeNavigator}/> 
        <Tab.Screen name="Used" component={UsedNavigator}/>
        <Tab.Screen name="Marked" component={MarkedNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};