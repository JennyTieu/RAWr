import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Color from '../constants/Colors';

export default GridTileTags = props => {
  return (
    <View style={styles.columnWrapper}> 
      <TouchableOpacity
        style={[styles.itemContainer]}
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
    margin: 10,
    height: 45,
    alignItems: "center",
    borderRadius: 30,
  },
  gridText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 9,
    borderRadius: 22,
    borderWidth: 3,
    backgroundColor: "#ededed",
    borderColor: Color.primary,
  },
  columnWrapper: {
    //flex: 1,
    //maxWidth: '50%',
  }
});