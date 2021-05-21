import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      //how to add images
      <Image style={styles.image} source={require('./data/artworks/for__infinity/48stylised.jpg')}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    alignItems:'center',
    width:'100%',
    height:'100%',
    resizeMode:'contain'
  }
});
