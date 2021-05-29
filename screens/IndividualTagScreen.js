import React, {useContext} from "react";
import { View, Text } from "react-native";
import{ReferenceContext} from '../data/ReferenceContext';

export default IndividualTagScreen = props => {

  const[referenceData] = useContext(ReferenceContext);
  const tags = referenceData.tags.filter(item => item.title);

  return (
    <View >
      <Text>{props.id}</Text>
    </View>
  )
}