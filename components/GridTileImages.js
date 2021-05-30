import React from "react";
import { StyleSheet, TouchableOpacity, View, Image,Text } from "react-native";


export default GridTileImage = (props) => {
  
  return (
    <View style={styles.columnWrapper}> 
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.onClick(props.id)}
      >
        <Image style={styles.image} source={props.image}/>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
    height: 180, 
  },
  image: {
    width: '100%',
    height: "100%",
    resizeMode:'contain',
    backgroundColor: 'black',
  },
  columnWrapper: {
    flex: 1, 
    maxWidth: "50%",
  },
});
