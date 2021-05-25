import React, {useContext} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList} from "react-native";
import {SearchBar} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import GridTile from "../components/GridTile";

export default HomeScreen = (props) => {

  const[referenceData] = useContext(ReferenceContext);
  const allReferences = referenceData.referenceItems.filter(item => item.image);

  const clickHandler = (id) => {
    console.log(id);
  };

  return (
    //<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      <View style={styles.topContainer}>
        <SearchBar 
          placeholder="enter tag ..."
          containerStyle= {styles.searchBar}
        />
      </View>
      <View style={styles.middleContainer}>
        <FlatList
          data={allReferences}
          renderItem={(itemData) => {return <GridTile onClick={clickHandler} image={itemData.item.image} id={itemData.item.id}/>}}
          numColumns={2}
        />
      </View>
    </View>
    //</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  middleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  }
});