import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MarkedScreen from '../screens/MarkedScreen';

const MarkedStack = createStackNavigator();

export default MarkedNavigator = () => {
  return (
    <MarkedStack.Navigator initialRouteName="Marked" screenOptions={{
      headerStyle: {height: 160},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <MarkedStack.Screen name="Marked" component={MarkedScreen}/>
    </MarkedStack.Navigator>
  );
};