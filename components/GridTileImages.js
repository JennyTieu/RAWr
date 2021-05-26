import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

export default GridTile = props => {
  return (
    <View style={styles.columnWrapper}> 
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.onClick(props.id)}
      >
        <Image style={styles.columnWrapper} source={props.image}/>
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
    backgroundColor: "white",
    borderRadius: 10,
  },
  columnWrapper: {
    flex: 1,
    maxWidth: '100%',
    resizeMode: "stretch",
    borderRadius: 10,
  }
});
