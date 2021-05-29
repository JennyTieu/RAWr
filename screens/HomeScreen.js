import React, {useContext, useState, useLayoutEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList,TouchableOpacity} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import GridTileImages from "../components/GridTileImages";
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
    navigation.navigate("Reference", {itemId : id});
  };

  const searchHandler = () => {
    setShowSearchScreen(true);
  };

  const cancelModalHandler = () => {
    setShowSearchScreen(false);
  };

  const addReferenceHandler = () => {
    navigation.navigate("AddReference");
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
          renderItem={(itemData) => {return <GridTileImages onClick={clickHandler} image={itemData.item.image} id={itemData.item.id}/>}}
          numColumns={2}
        />
        
      </View>
      <TouchableOpacity 
          style={styles.floatingButton}
          onPress={addReferenceHandler}
        >
          <Ionicons name="md-add" size={40} color="white" />
        </TouchableOpacity>
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
    paddingBottom: 130,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
    right: 15,
    width: 60,
    height: 60,
    backgroundColor: 'tomato',
    borderRadius: 100,
  },
});