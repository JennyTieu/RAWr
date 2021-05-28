import React, {useContext, useLayoutEffect} from 'react';
import ReferenceList from '../components/ReferenceList';
import { Button} from "react-native-elements";
import{ReferenceContext} from '../data/ReferenceContext';
import {Ionicons} from "@expo/vector-icons";

export default MarkedScreen = ({ route, navigation}) => {
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
    const markedReferences = referenceData.referenceItems.filter(item => item.isMarked);

    return <ReferenceList listData={markedReferences} navigation={navigation}/>;
};