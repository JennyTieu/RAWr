import React, {useContext, useState, useLayoutEffect} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Keyboard, FlatList,TouchableOpacity} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import GridTileImages from "../components/GridTileImages";
import SearchScreen from "./SearchScreen";
import {Ionicons, FontAwesome5} from "@expo/vector-icons";
import GridTileList from '../components/GridTileList';
import Color from '../constants/Colors';

export default HomeScreen = ({ route, navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <Button 
        type="clear" 
        icon={<FontAwesome5 
          name="hashtag" 
          size={30} 
          color={Color.buttonTextColor}/>} 
        onPress={() => navigation.navigate("Tags")}
      />)
    });
  }, [navigation]);

  const[referenceData] = useContext(ReferenceContext);
  const [allReferences, setReferences] = useState(referenceData.referenceItems);
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [searchText, setSearchText] = useState("");

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
          list={allReferences}
      />
      <View style={styles.topContainer}>
        <SearchBar 
          placeholder="search ..."
          autoCorrect={false}
          value={searchText}
          containerStyle= {styles.searchBar}
          lightTheme="true"
          onChangeText={(val) => setSearchText(val)}
        />
        <Button 
          type="clear"
          icon={<Ionicons name="md-options-outline" size={30} color='grey'/>}
          onPress={searchHandler}
        />
      </View>
      <View style={styles.middleContainer}>
        <GridTileList listData={allReferences} navigation={navigation}/>
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
    backgroundColor: Color.iconColor,
    borderRadius: 100,
  },
});