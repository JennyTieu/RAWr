import React, {useContext, useState, useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList,TouchableOpacity, Text, Switch} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import {ReferenceContext} from '../data/ReferenceContext';
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

  let referencesByTag = [];
  let referencesSearchBar = [];

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
    navigation.navigate("AddReference");
  };

  //Setzt den Filter zurueck
  const deleteFilterHandler = () => {
    referencesByTag.length = 0;
    setSwitchValue(false);
    setValueMS([]);
    setReferences(referenceData.referenceItems);
  };

  const onChangeMS = (value) => {
    setValueMS(value);
  };

  //wendet den Filter an
  const modalApplyHandler = () => {
    
    for (let j = 0; j < references.length; j++) {
      for (let i = 0; i < valueMS.length; i++) {
        if (references[j].tagIds.includes(valueMS[i])) {
          referencesByTag.push(references[j]);
        }
      }
    }

    if (switchValue) {
      if (referencesByTag.length === 0) {
        referencesByTag = references.filter((item) => item.isUsed !== true);
      } else {
        referencesByTag = referencesByTag.filter((item) => item.isUsed !== true);
      }
    }

    if (!switchValue && referencesByTag.length === 0) {
      setShowFilterScreen(false);
    } else {
      setReferences(referencesByTag);
      setShowFilterScreen(false);
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

  const searchHandler = () => {
    setReferences(referencesSearchBar);
    setSearchValue(false);
  };

  const quitSearchHandler = () => {
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
          icon={searchValue === true ? <Ionicons name="md-search" size={22} color='grey'/> : <Ionicons name="md-arrow-undo-outline" size={22} color='grey'/>}
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
        />
        <Button 
          type="clear"
          icon={<Ionicons name="md-options-outline" size={30} color='grey'/>}
          onPress={filterHandler}
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