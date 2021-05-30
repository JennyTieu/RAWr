import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {ReferenceContext} from '../data/ReferenceContext';
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

export default IndividualTagScreen = ({route, navigation}) => {

  const[referenceData, setReferenceData] = useContext(ReferenceContext);
  const tags = referenceData.tags.filter(item => item.title);

  const tagTitle = route.params.itemTitle;

  const [currentInput, setCurrentInput] = useState("");

  const deleteTextHandler = () => {
    if (currentInput === '') {
      navigation.goBack();
    } else {
      setCurrentInput("");
    }
  };

  const deleteTagHandler = () => {  
    setReferenceData(referenceData => ({
      tags: referenceData.tags.filter(tag => tag.title != tagTitle),
      referenceItems: referenceData.referenceItems,
      idCounterTags: referenceData.idCounterTags,
      idCounterReferences: referenceData.idCounterReferences
    }));
    
    navigation.goBack();
  };

  const changeTextHandler = (enteredText) => {
    setCurrentInput(enteredText);
  };

  const changeTagTitleHandler = () => {
    if (currentInput !== '') {   
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].title === tagTitle) {
          tags[i].title = currentInput;   
        }
      }

      navigation.goBack();
    } 
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Individual Tag Screen of {tagTitle}</Text>
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
          placeholder={tagTitle}
          style={styles.title}
          onChangeText={changeTextHandler}
          value={currentInput}
        />
        <Button
          onPress={changeTagTitleHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-pencil"
              size={32}
              color="rgb(0, 122, 255)"
            />
          }
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button 
          onPress={deleteTagHandler}
          type="solid"
          title="Delete Tag"
          titleStyle={styles.text}
          buttonStyle={styles.button}
          icon={
            <Ionicons
              name="md-trash-outline"
              size={30}
              color="white"
            />
          }
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