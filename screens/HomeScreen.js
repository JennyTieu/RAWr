import React, {useContext, useState, useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList,TouchableOpacity, Text, Switch} from "react-native";
import {SearchBar, Button} from "react-native-elements";
import {ReferenceContext} from '../data/ReferenceContext';
import {Ionicons, FontAwesome5} from "@expo/vector-icons";
import GridTileList from '../components/GridTileList';
import Color from '../constants/Colors';
import Modal from 'react-native-modal';
import GridTileTags from '../components/GridTileTags';

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

  const referencesByTag = [];
  const [referenceData] = useContext(ReferenceContext);
  const [allReferences, setReferences] = useState(referenceData.referenceItems);
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const tags = referenceData.tags.filter(item => item.title);
  const references = referenceData.referenceItems;

  const searchHandler = () => {
    setShowSearchScreen(true);
  };

  const cancelModalHandler = () => {
    setShowSearchScreen(false);
  };

  const addReferenceHandler = () => {
    navigation.navigate("AddReference");
  };

  const deleteFilterHandler = () => {
    referencesByTag.length = 0;
    setSwitchValue(false);
    console.log("References in der Liste: " + referencesByTag.length);
    setReferences(referenceData.referenceItems);
  };

  const switchHandler = () => { 
    setSwitchValue(!switchValue);
  };

  const clickHandler = (id) => {
    let dublicatesCheck = true;

    for (let i = 0; i < references.length; i++) {
      for (let j = 0; j < references[i].tagIds.length; j++) {
        if (references[i].tagIds[j] === id) {
          for (let k = 0; k < referencesByTag.length; k++) {
            if (references[i] === referencesByTag[k]) {
              dublicatesCheck = false;
            } 
          }
          if (dublicatesCheck) referencesByTag.push(references[i]); 
        }
      }
    }
    console.log("References in der Liste: " + referencesByTag.length);
  };

  const modalApplyHandler = () => {

    if (switchValue && referencesByTag.length === 0) {
      for (let i = 0; i < references.length; i++) {
        if (references[i].isUsed) {
          referencesByTag.push(references[i]); 
        }
      }
    } else if (referencesByTag.length !== 0) {
      for (let i = 0; i < referencesByTag.length; i++) {
        if (referencesByTag[i].isUsed) {
          referencesByTag.filter((item) => item.isUsed !== false);
        }
      }
    }

    setShowSearchScreen(false);
    setReferences(referencesByTag);
  };

  return (
    <View>

      <Modal 
        isVisible={showSearchScreen}
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
          <FlatList
            data={tags}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GridTileTags 
                  onClick={clickHandler}
                  title={itemData.item.title}
                  id={itemData.item.id}
                  backgCol={Color.lightBackground}
                />
              )
            }}
            numColumns={2}
          />
        </View>
        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 15}}>
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
    marginBottom: 130,
    borderRadius: 15,
  },
  modalTopContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalMiddleContainer: {
    flex: 4,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBottomContainer: {
    flex: 2,
    justifyContent: "center"
  },
  switch: {
    transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }]
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    fontSize: 18,
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