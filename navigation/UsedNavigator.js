import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsedScreen from '../screens/UsedScreen';
import IndividualTagScreen from "../screens/IndividualTagScreen";
import Color from '../constants/Colors';

const UsedStack = createStackNavigator();

export default UsedNavigator = () => {
  return (
    <UsedStack.Navigator initialRouteName="Used" screenOptions={{
      headerStyle: {height: 110, backgroundColor: Color.primary},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Color.buttonTextColor
      }
    }}>
      <UsedStack.Screen name="Used" component={UsedScreen}/>
      <UsedStack.Screen name="IndividualTag" component={IndividualTagScreen}/>
    </UsedStack.Navigator>
  );
};