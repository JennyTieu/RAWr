import React, {useContext, useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, View, FlatList,TouchableOpacity, Text, Switch} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import {ReferenceContext} from '../data/ReferenceContext';
import { useIsFocused } from '@react-navigation/native';
import {Ionicons, FontAwesome5} from "@expo/vector-icons";
import GridTileList from '../components/GridTileList';
import Color from '../constants/Colors';
import Modal from 'react-native-modal';
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';

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

  const [referenceData] = useContext(ReferenceContext);
  const [allReferences, setReferences] = useState(referenceData.referenceItems);
  const [showFilterScreen, setShowFilterScreen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const tags = referenceData.tags.filter(item => item.title);
  const references = referenceData.referenceItems;
  const [valueMS, setValueMS] = useState([]);
  const [searchValue, setSearchValue] = useState(true);
  const [filterResultValue, setfilterResultValue] = useState(false);
  const [lengthRefsByTag, setLengthRefsByTag] = useState();

  let referencesByTag = [];
  let referencesSearchBar = [];
  const isFocused = useIsFocused();
  
  useEffect(() => {
    setReferences(referenceData.referenceItems);
    modalApplyHandler();
    searchHandler();
  }, [isFocused]);

  //Oeffnet das Fenster des Filter, zum Suchen nach bestimmten Tags und Ausblenden der used References
  const filterHandler = () => {
    setShowFilterScreen(true);
  };

  //Schliesst das Fenster des Filters
  const cancelModalHandler = () => {
    setShowFilterScreen(false);
  };

  //Fuegt neue Reference hinzu
  const addReferenceHandler = () => {
    navigation.navigate("Add Reference");
  };

  //Setzt den Filter zurueck
  const deleteFilterHandler = () => {
    referencesByTag.length = 0;
    setSwitchValue(false);
    setValueMS([]);
    setReferences(referenceData.referenceItems);
    setfilterResultValue(false);
  };

  const onChangeMS = (value) => {
    setValueMS(value);
  };

  //wendet den Filter an
  const modalApplyHandler = () => {
    let doubleCheck = false;
    
    for (let i = 0; i < valueMS.length; i++) {
      for (let j = 0; j < references.length; j++) {
        if (references[j].tagIds.includes(valueMS[i])) {
          if (referencesByTag.includes(references[j])) {
            doubleCheck = true;
          } else {
            doubleCheck = false;
          }
          if (doubleCheck === false) referencesByTag.push(references[j]);
        }
      }
    }

    if (referencesByTag.length === 0 && !switchValue) {
      setShowFilterScreen(false);
    } else {
      if (switchValue) {
        if (referencesByTag.length === 0) {
          referencesByTag = references.filter((item) => item.isUsed !== true);
          setReferences(referencesByTag);
          setShowFilterScreen(false);
          setLengthRefsByTag(referencesByTag.length);
        } else {
          referencesByTag = referencesByTag.filter((item) => item.isUsed !== true);
          setReferences(referencesByTag);
          setShowFilterScreen(false);
          setLengthRefsByTag(referencesByTag.length);
        }
      } else {
        if (referencesByTag.length === 0) {
          setShowFilterScreen(false);
        } else {
          setReferences(referencesByTag);
          setShowFilterScreen(false);
          setLengthRefsByTag(referencesByTag.length);
        }
      }
      setfilterResultValue(true);
    }
  };

  //Betaetigung des Switches im FilterScreen
  const switchHandler = () => { 
    setSwitchValue(!switchValue);
  };

  //durchsucht die Titel, die Comments und die Sources der References nach dem Suchbegriff
  const searchBarHandler = (currentText) => {
    referencesSearchBar.length = 0;

    for (let i = 0; i < references.length; i++) {
      if (references[i].title.toLowerCase().includes(currentText.toLowerCase()) || 
        references[i].comment.toLowerCase().includes(currentText.toLowerCase()) || 
        references[i].source.toLowerCase().includes(currentText.toLowerCase())) {
        referencesSearchBar.push(references[i]);
      }
    }
  };

  //wendet den Suchbegriff der Searchbar an
  const searchHandler = () => {
    if (searchText === "") {
      setSearchValue(true);
    } else {
      setReferences(referencesSearchBar);
      setSearchValue(false);
    }
  };

  //beendet die Suche durch die SearchBar
  const quitSearchHandler = () => {
    setReferences(referenceData.referenceItems);
    setSearchValue(true);
  };

  //loescht den aktuellen inhalt der searchBar und setzt Suche zurueck
  const clearSearchBarHandler = () => {
    setSearchText("");
    setReferences(referenceData.referenceItems);
    setSearchValue(true);
  };

  return (
    <View>

      <Modal 
        isVisible={showFilterScreen}
        style={styles.modalScreen}
      >
        <View style={styles.modalTopContainer}>
          <Text style={{fontSize: 18}}>Filter</Text>
          <Button 
            type="clear"
            icon={<Ionicons name="close" size={28}/>}
            onPress={cancelModalHandler}
          />
        </View>
        <View style={styles.modalMiddleContainer}>
          <MultiselectDropdown
            label="Tags"
            data={tags}
            enableSearch
            chipType="flat"
            primaryColor={Color.lightBackground}
            value={valueMS}
            onChange={onChangeMS}
          />
        </View>
        <View style={styles.modalSwitchContainer}>
          <Switch 
            style={styles.switch} 
            trackColor={{ false: "lightgrey", true: Color.primary }}
            thumbColor={switchValue ? Color.lightBackground : "white"}
            value={switchValue}
            onValueChange={switchHandler}
          />
          <Text style={styles.switchText}>hide used references</Text>
        </View>
        <View style={styles.modalBottomContainer}>
          <Button 
            type="solid"
            onPress={modalApplyHandler}
            title="Apply"
            buttonStyle={styles.modalButton}
            titleStyle={styles.textStyle}
          />
          <Button 
            type="solid"
            onPress={deleteFilterHandler}
            title="Clear"
            buttonStyle={styles.modalButton}
            titleStyle={styles.textStyle}
          />
        </View>
      </Modal>

      <View style={styles.topContainer}>
        <Button 
          type="clear"
          icon={searchValue === true ? <Ionicons name="md-search" size={20} color='grey'/> : <Ionicons name="md-arrow-undo-outline" size={22} color='grey'/>}
          onPress={searchValue === true ? searchHandler : quitSearchHandler}
        />
        <SearchBar 
          placeholder="search ..."
          autoCorrect={false}
          value={searchText}
          containerStyle= {styles.searchBar}
          lightTheme="true"
          searchIcon={false}
          onChangeText={(val) => setSearchText(val)}
          onSubmitEditing={searchBarHandler(searchText)}
          onClear={clearSearchBarHandler}
        />
        <Button 
          type="clear"
          icon={<Ionicons name="md-options-outline" size={26} color='grey'/>}
          onPress={filterHandler}
        />
      </View>
      {searchValue === false && <Text style={{alignSelf: "center"}}>- {allReferences.length} results -</Text>}
      {filterResultValue === true && <Text style={{alignSelf: "center"}}>- {lengthRefsByTag} results -</Text>}
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
  modalScreen: {
    flex: 1,
    backgroundColor: "white",
    margin: 15,
    marginTop: 30,
    marginBottom: 180,
    borderRadius: 15,
  },
  modalTopContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1
  },
  modalMiddleContainer: {
    flex: 2,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.accent
  },
  modalSwitchContainer: {
    flex: 1, 
    flexDirection: "row", 
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: Color.accent
  },
  modalBottomContainer: {
    flex: 2,
    justifyContent: "center",
    borderTopWidth: 1,
    marginRight: 20,
    marginLeft: 20
  },
  switch: {
    transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    fontSize: 17,
    marginLeft: 12,
    color: "black"
  },
  modalButton: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Color.iconColor,
    borderRadius: 10
  }
});