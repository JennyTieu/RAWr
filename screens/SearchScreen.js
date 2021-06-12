import React, {useContext, useState} from "react";
import {View, StyleSheet, Modal, Text, FlatList, Switch} from "react-native";
import {Button} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import {ReferenceContext} from '../data/ReferenceContext';
import GridTileTags from "../components/GridTileTags";
import Color from '../constants/Colors';


export default SearchScreen = (props) => {

  const [referenceData] = useContext(ReferenceContext);
  const [switchValue, setSwitchValue] = useState(false);
  const tags = referenceData.tags.filter(item => item.title);
  const references = props.list;

  const referencesByTag = [];

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

  const deleteFilterHandler = () => {
    referencesByTag.length = 0;
    console.log("References in der Liste: " + referencesByTag.length);
  };

  const switchHandler = () => { 
    setSwitchValue(!switchValue);

    /*
    if (switchValue) {
      for (let i = 0; i < references.length; i++) {
        if (references[i].isUsed) {
          referencesByTag.push(references[i]); 
        }
      }
    }
    console.log("Bilder in der Liste ohne used: " + referencesByTag.length);
    console.log(referencesByTag);
    console.log("References in der Liste: " + referencesByTag.length);
    */
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        SpeechRecognitionAlternative.alert("Modal has been closed"); 
      }} 
      
    >
      <View style={styles.screenContainer}>
        <View style={styles.topContainer}>
          <Button 
            type="clear"
            icon={<Ionicons name="arrow-back-outline" size={34}/>}
            onPress={props.onCancelModal}
          />
          <Text style={styles.textStyle}>Filter</Text>
          <Button 
            type="clear"
            icon={<Ionicons name="md-trash-outline" size={30}/>}
            onPress={deleteFilterHandler}
          />
        </View>
        <View style={styles.middleContainer}>
          <FlatList
            data={tags}
            renderItem={(itemData) => {
              return (
                <GridTileTags 
                  onClick={clickHandler}
                  title={itemData.item.title}
                  id={itemData.item.id}
                />
              )
            }}
            numColumns={2}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Switch 
            style={styles.switch} 
            trackColor={{ false: "lightgrey", true: Color.primary }}
            thumbColor={switchValue ? Color.lightBackground : "white"}
            value={switchValue}
            onValueChange={switchHandler}
          />
          <Text style={styles.switchText}>hide used references</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    margin: 30,
    backgroundColor: "#f7f7f7",
    borderRadius: 10
  },
  topContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  middleContainer: {
    flex: 6,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  switch: {
    transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }]
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  switchText: {
    fontSize: 18,
    marginLeft: 12,
    color: "black"
  },
})