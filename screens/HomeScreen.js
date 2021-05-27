import React, {useContext, useState, useLayoutEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import GridTile from "../components/GridTileImages";
import SearchScreen from "./SearchScreen";
import {Ionicons} from "@expo/vector-icons";

export default HomeScreen = ({ route, navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <Button 
        type="clear" 
        icon={<Ionicons 
          name="md-bookmark-outline" 
          size={30} />} 
        onPress={() => navigation.navigate("Tags")}
      />)
    });
  }, [navigation]);

  const[referenceData] = useContext(ReferenceContext);
  const allReferences = referenceData.referenceItems.filter(item => item.image);
  const [showSearchScreen, setShowSearchScreen] = useState(false);

  const clickHandler = (id) => {
    console.log("Image id: " + id);
  };

  const searchHandler = () => {
    setShowSearchScreen(true);
  };

  const cancelModalHandler = () => {
    setShowSearchScreen(false);
  };

  return (
    //<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      <SearchScreen 
          visible={showSearchScreen}
          onCancelModal={cancelModalHandler}
      />
      <View style={styles.topContainer}>
        <SearchBar 
          placeholder="search ..."
          containerStyle= {styles.searchBar}
          lightTheme="true"
          onChangeText= {() => {return <SearchScreen />}}
        />
        <Button 
          type="clear"
          icon={<Ionicons name="md-options-outline" size={30}/>}
          onPress={searchHandler}
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