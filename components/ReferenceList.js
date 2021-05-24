import React, {useContext} from 'react';
import{View, FlatList} from 'react-native';
import ReferenceItemTile from './ReferenceItemTile';
import {ReferenceContext} from '../data/ReferenceContext';

export default ReferenceList = (props) => {
    const[referenceData, setReferenceData] = useContext(ReferenceContext);

    const deleteHandler = (id) => {
        setReferenceData(referenceData => ({
            tags:referenceData.tags,
            referenceItems: referenceData.referenceItems.filter(referenceItem => referenceItem.id !==id),
            idCounterTags: referenceData.idCounterTags,
            idCounterReferences: referenceData.idCounterReferences
        }));
    };

    const markedHandler = (id) => {
        let referenceItemToChange = referenceData.referenceItems.find(referenceItem => referenceItem.id === id);
        referenceItemToChange.isMarked = !referenceItemToChange.isMarked;

        setReferenceData(referenceData => ({
            tags: referenceData.tags,
            referenceItems: referenceData.referenceItems.map(referenceItem => referenceItem.id ===id ? referenceItemToChange : referenceItem),
            idCounterTags: referenceData.idCounterTags,
            idCounterReferences: referenceData.idCounterReferences
        }));
    };

    const usedHandler = (id) => {
        let referenceItemToChange = referenceData.referenceItems.find(referenceItem => referenceItem.id === id);
        referenceItemToChange.isUsed = !referenceItemToChange.isUsed;

        setReferenceData(referenceData => ({
            tags: referenceData.tags,
            referenceItems: referenceData.referenceItems.map(referenceItem => referenceItem.id ===id ? referenceItemToChange : referenceItem),
            idCounterTags: referenceData.idCounterTags,
            idCounterReferences: referenceData.idCounterReferences
        }));
    };

    return(
        <View style={{ flex:1}}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) =>{
                    return(
                        <ReferenceItemTile
                            id = {itemData.item.id} 
                            tagIds={itemData.item.tagIds}
                            title = {itemData.item.title}
                            isMarked={markedHandler}
                            isUsed={usedHandler}
                            comment={itemData.item.comment}
                            source={itemData.item.source}
                            image={itemData.item.image}
                            onDelete={deleteHandler}
                        />
                    );
                }}
                style={{width: '100%'}}
                contentContainerStyle={{allignItems: 'center', padding:20}}
            />
        </View>
    )
}