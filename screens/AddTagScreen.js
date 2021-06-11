import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Tag from "../models/tag";
import { ReferenceContext } from "../data/ReferenceContext";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default TagScreen = ({ route, navigation}) => {

  const [referenceData, setReferenceData] = useContext(ReferenceContext);
  const {tagId} = referenceData.tags.filter(item => item.id);

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
        <Text style={styles.text}>Add Tag Screen</Text>
      </View>
      <View style={styles.middleContainer}>
        <Button
          onPress={deleteTextHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-close-outline"
              size={32}
              color="rgb(0, 122, 255)"
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
              color="rgb(0, 122, 255)"
            />
          }
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}></Text>
      </View>
    </View>     
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  middleContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
  },
  bottomContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
  },
  title: {
    color: "black",
    fontSize: 22,
  },
  button: {
    backgroundColor: "#8b0000",
  }
});