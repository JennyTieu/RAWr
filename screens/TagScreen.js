import React, {useContext,useLayoutEffect} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import {Ionicons} from "@expo/vector-icons";
import Color from '../constants/Colors';
import GridTileTags from "../components/GridTileTags";

export default TagScreen = ({ route, navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <Button 
        type="clear" 
        icon={<Ionicons 
          name="md-add" 
          size={30} />} 
        onPress={() => navigation.navigate("AddTag")}
      />)
    });
  }, [navigation]);

  const[referenceData] = useContext(ReferenceContext);
  const tags = referenceData.tags.filter(item => item.title);

  const references = referenceData.referenceItems;
  const tagImages = [];

  const clickHandler = (id, title, images) => {
    tagImages.length = 0;
    for (let i = 0; i < references.length; i++) {
      for (let j = 0; j < references[i].tagIds.length; j++) {
        if (references[i].tagIds[j] === id) {
          const image = references[i].image;
          tagImages.push(image);
        }
      }
    }
    navigation.navigate("IndividualTag", { itemTitle : title, itemId : id, tagImages : tagImages});
  };

  return (
    <View style={{backgroundColor: "#f7f7f7"}}>
      <FlatList
        data={tags}
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
  )
}

