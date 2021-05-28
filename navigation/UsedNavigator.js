import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsedScreen from '../screens/UsedScreen';

const UsedStack = createStackNavigator();

export default UsedNavigator = () => {
  return (
    <UsedStack.Navigator initialRouteName="Used" screenOptions={{
      headerStyle: {height: 110},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'tomato'
      }
    }}>
      <UsedStack.Screen name="Used" component={UsedScreen}/>
    </UsedStack.Navigator>
  );
};