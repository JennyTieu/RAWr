import React, {useContext} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddReferenceTile from '../components/AddReferenceTile';

import {ReferenceContext} from '../data/ReferenceContext';
import ReferenceItem from '../models/referenceItem';

export default AddReferenceScreen = ({route, navigation}) => {
    const [refData, setRefData] = useContext(ReferenceContext);

    const addReference = (tagIds, title, comment, source, image) =>{
        let newIdCounter = refData.idCounterReferences +=1;
        let newReferences = refData.referenceItems;

        newReferences.push(new ReferenceItem('m'+ newIdCounter, tagIds, title, false, false, comment, source, image));
        setRefData(refData => ({
            tags: refData.tags,
            referenceItems: newReferences,
            idCounterTags: refData.idCounterTags,
            idCounterReferences: newIdCounter
        }));
      navigation.goBack();  
    }
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex:1, padding:10, flexDirection: 'row'}}>
                <AddReferenceTile onAdd={(tagIds, title, comment, source, image) => addReference(tagIds, title, comment, source, image)} navigation={navigation}/>
            </View>
        </TouchableWithoutFeedback>
    ); 
};
