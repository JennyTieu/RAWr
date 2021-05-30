import React, {useContext} from 'react';
import{View, FlatList,StyleSheet} from 'react-native';
import GridTileImages from './GridTileImages';
import {ReferenceContext} from '../data/ReferenceContext';

export default GridTileList = (props) => {
    const clickHandler = (id) => {
        props.navigation.navigate("Reference", {itemId : id});
      };

    return(
        <View style={{flex:1}}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) => {
                    return ( 
                        <GridTileImages
                            onClick={clickHandler} 
                            image={itemData.item.image} 
                            id={itemData.item.id}
                        />
                    );
                }}
                numColumns={2}
                style={{width: '100%'}}
                contentContainerStyle={{allignItems: 'center'}}
            />
        
      </View>
    )
}
