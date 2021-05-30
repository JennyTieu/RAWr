import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MarkedScreen from '../screens/MarkedScreen';
import IndividualTagScreen from "../screens/IndividualTagScreen";

const MarkedStack = createStackNavigator();

export default MarkedNavigator = () => {
  return (
    <MarkedStack.Navigator initialRouteName="Marked" screenOptions={{
      headerStyle: {height: 110},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <MarkedStack.Screen name="Marked" component={MarkedScreen}/>
      <MarkedStack.Screen name="IndividualTagScreen" component={IndividualTagScreen}/>
    </MarkedStack.Navigator>
  );
};