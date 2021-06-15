import React, {useContext,useLayoutEffect} from 'react';
import{View, FlatList} from 'react-native';
import ReferenceItemTile from '../components/ReferenceItemTile';
import {ReferenceContext} from '../data/ReferenceContext';

export default ReferenceScreen = ({route, navigation}) => {
    const [referenceData,setReferenceData] = useContext(ReferenceContext);
    const {itemId} = route.params;
    const selectedReference = referenceData.referenceItems.filter(item => item.id === itemId);

    const deleteHandler = (id) => {
        setReferenceData(referenceData => ({
            tags:referenceData.tags,
            referenceItems: referenceData.referenceItems.filter(referenceItem => referenceItem.id !==id),
            idCounterTags: referenceData.idCounterTags,
            idCounterReferences: referenceData.idCounterReferences
        }));
        navigation.goBack();
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

    const onEditHandler = (id, title, source, comment, tags, image) => {
        navigation.navigate("Edit Reference", {itemId : id, itemTitle : title, itemSource : source, itemNote : comment, itemTags : tags, itemImage: image});
    };

    const tagHandler = (tag) => {
        let tags=[];

        for(i=0; i<tag.length; i++){
            for(n=0; n< referenceData.tags.length; n++){
                if(tag[i] === referenceData.tags[n].id){
                    //tagString+= ('#'+referenceData.tags[n].title + ' ');
                    tags.push(referenceData.tags[n].title);
                }
            }
            
        }
        return tags;
    };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: "",
        });
      }, [navigation]);
    
    return (
        <View style={{ flex:1}}>
            <FlatList
                data={selectedReference}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) =>{
                    return(
                        <ReferenceItemTile
                            id = {itemData.item.id} 
                            tagIds={tagHandler(itemData.item.tagIds)}
                            tags={itemData.item.tagIds}
                            title = {itemData.item.title}
                            isMarked={itemData.item.isMarked}
                            isUsed={itemData.item.isUsed}
                            onMarked={markedHandler}
                            onUsed={usedHandler}
                            comment={itemData.item.comment}
                            source={itemData.item.source}
                            image={itemData.item.image}
                            onEdit={onEditHandler}
                            onDelete={deleteHandler}
                            navigation={navigation}
                        />
                    );
                }}
                style={{width: '100%'}}
                contentContainerStyle={{allignItems: 'center', padding:5}}
            />
        </View>
    )
    //<ReferenceList listData={selectedReference} navigation={navigation}/>;
}