import React, {useContext, useLayoutEffect} from 'react';
import ReferenceList from '../components/ReferenceList';
import{ReferenceContext} from '../data/ReferenceContext';
import { Button} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";

export default UsedScreen = ({ route, navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
          <Button 
            type="clear" 
            icon={<Ionicons 
              name="md-grid" 
              size={30} />} 
            onPress={() => {}}
          />)
        });
      }, [navigation]);

    const[referenceData] = useContext(ReferenceContext);
    const usedReferences = referenceData.referenceItems.filter(item => item.isUsed);

    return <ReferenceList listData={usedReferences} navigation={navigation}/>;
};