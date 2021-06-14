import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Tag from "../models/tag";
import { ReferenceContext } from "../data/ReferenceContext";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import Color from '../constants/Colors';

export default TagScreen = ({ route, navigation}) => {

  const [referenceData, setReferenceData] = useContext(ReferenceContext);
  const {tagId} = referenceData.tags.filter(item => item.id);
  const tags = referenceData.tags.filter(item => item.title);

  const [currentInput, setCurrentInput] = useState("");

  const addHandler = () => {
    if (currentInput !== '') {
      if (tagId == null) {
        let newIdCounter = referenceData.idCounterTags += 1;
        let newTags = referenceData.tags;
        newTags.push(new Tag('t' + newIdCounter, currentInput));
        setReferenceData(referenceData => ({
          tags: newTags,
          referenceItems: referenceData.referenceItems,
          idCounterTags: newIdCounter,
          idCounterReferences: referenceData.idCounterReferences
        }));
      } 
    }
    navigation.goBack();
  };

  const changeTextHandler = (enteredText) => {
    setCurrentInput(enteredText);
  };

  const deleteTextHandler = () => {
    if (currentInput === '') {
      props.navigation.goBack();
    } else {
      setCurrentInput("");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Enter the title {"\n"}of your new tag here</Text>
      </View>
      <View style={styles.middleContainer}>
        <Button
          onPress={deleteTextHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-close-outline"
              size={32}
              color={Color.iconColor}
            />
          }
        />
        <TextInput
          placeholder="enter title"
          style={styles.title}
          onChangeText={changeTextHandler}
          value={currentInput}
        />
        <Button
          onPress={addHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-add"
              size={32}
              color={Color.iconColor}
            />
          }
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.allTagsText}>All tags:</Text>
        <FlatList horizontal
          data={tags}
          renderItem={(itemData) => {
            return (
              <Text style={styles.tags}>{itemData.item.title}</Text>
            )
          }}
        />
      </View>
    </View>     
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  middleContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20
  },
  bottomContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  }, 
  text: {
    fontSize: 20,
    textAlign: "center",
    color: Color.textColor
  },
  title: {
    color: "black",
    fontSize: 22,
  },
  button: {
    backgroundColor: "#8b0000",
  },
  tags: {
    alignSelf:"center",
    fontSize: 22,
    margin: 5,
    padding: 7,
    backgroundColor: Color.lightBackground,
    borderRadius: 10,
  },
  allTagsText: {
    alignSelf: "flex-start",
    textAlign: "left",
    color: "black",
  }
});