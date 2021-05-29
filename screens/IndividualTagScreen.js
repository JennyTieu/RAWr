import React, {useContext} from "react";
import { View, Text } from "react-native";
import{ReferenceContext} from '../data/ReferenceContext';

export default IndividualTagScreen = ({route, navigation}) => {

  const[referenceData] = useContext(ReferenceContext);
  const {tagId} = route.params;
  const tagID = route.params.itemId;

  const selectedTag = referenceData.tags.filter(item => item.id === tagId);

  return (
    <View >
      <Text>Individual Tag Screen of {tagID}</Text>
    </View>
  )
}