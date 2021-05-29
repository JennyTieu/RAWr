import React, {useContext} from "react";
import { View, Text } from "react-native";
import Tag from "../models/tag";
import { ReferenceContext } from "../data/ReferenceContext";
import InputTile from "../components/InputTile";

export default TagScreen = ({ route, navigation}) => {

  const [referenceData, setReferenceData] = useContext(ReferenceContext);
  const {tagId} = referenceData.tags.filter(item => item.id);

  const addHandler = name => {
    if (tagId == null) {
      let newIdCounter = referenceData.idCounterTags += 1;
      let newTags = referenceData.tags;
      newTags.push(new Tag('t' + newIdCounter, name));
      setReferenceData(referenceData => ({
        tags: newTags,
        referenceItems: referenceData.referenceItems,
        idCounterTags: newIdCounter,
        idCounterReferences: referenceData.idCounterReferences
      }));
    } 
    navigation.goBack();
  };

  return (
    <View>
      <InputTile placeholderText={"enter title ..."} onAdd={addHandler} navigation={navigation}/>
    </View>
  )
}