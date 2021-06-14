import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TagScreen from "../screens/TagScreen";
import AddTagScreen from "../screens/AddTagScreen";
import ReferenceScreen from "../screens/ReferenceScreen";
import AddReferenceScreen from "../screens/AddReferenceScreen";
import IndividualTagScreen from "../screens/IndividualTagScreen";
import EditReferenceScreen from "../screens/EditReferenceScreen";
import IndividualReferenceScreen from '../screens/IndividualReferenceScreen';
import Color from '../constants/Colors';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {height: 110, backgroundColor: Color.primary},
      headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Color.buttonTextColor
        
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Tags" component={TagScreen}/>
      <HomeStack.Screen name="AddTag" component={AddTagScreen}/>
      <HomeStack.Screen name="Reference" component={ReferenceScreen}/>
      <HomeStack.Screen name="IndividualReference" component={IndividualReferenceScreen}/>
      <HomeStack.Screen name="AddReference" component={AddReferenceScreen}/>
      <HomeStack.Screen name="IndividualTag" component={IndividualTagScreen}/>
      <HomeStack.Screen name="EditReference" component={EditReferenceScreen}/>
      
    </HomeStack.Navigator>
  );
};