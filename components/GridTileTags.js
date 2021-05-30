import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default GridTileTags = props => {
  return (
    <View style={styles.columnWrapper}> 
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.onClick(props.id, props.title)}
      >
        <Text style={styles.gridText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
  },
  gridText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  columnWrapper: {
    flex: 1,
    maxWidth: '50%'
  }
});