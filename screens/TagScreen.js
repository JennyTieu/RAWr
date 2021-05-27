import React, {useContext,useLayoutEffect} from "react";
import { View, FlatList } from "react-native";
import {Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import {Ionicons} from "@expo/vector-icons";

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

  const clickHandler = () => {

  };

  return (
    <View>
      <FlatList
        data={tags}
        renderItem={(itemData) => {
          return (
            <GridTileTags 
              text={itemData.item.title}
              onClick={clickHandler}
              id={itemData.item.title}
            />
          )
        }}
        numColumns={2}
      />
    </View>
  )
}