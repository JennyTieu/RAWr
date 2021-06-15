import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MarkedScreen from '../screens/MarkedScreen';
import IndividualTagScreen from "../screens/IndividualTagScreen";
import EditReferenceScreen from "../screens/EditReferenceScreen";
import IndividualReferenceScreen from '../screens/IndividualReferenceScreen';
import Color from '../constants/Colors';

const MarkedStack = createStackNavigator();

export default MarkedNavigator = () => {
  return (
    <MarkedStack.Navigator initialRouteName="Marked" screenOptions={{
      headerStyle: {height: 110, backgroundColor: Color.primary},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Color.buttonTextColor,

      }
    }}>
      <MarkedStack.Screen name="Marked" component={MarkedScreen}/>
      <MarkedStack.Screen name="IndividualTag" component={IndividualTagScreen}/>
      <MarkedStack.Screen name="IndividualReference" component={IndividualReferenceScreen}/>
      <MarkedStack.Screen name="Edit Reference" component={EditReferenceScreen}/>
    </MarkedStack.Navigator>
  );
};