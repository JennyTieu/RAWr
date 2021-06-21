import React from 'react';
import{View, FlatList} from 'react-native';
import GridTileImages from './GridTileImages';

export default GridTileList = (props) => {
    const clickHandler = (id) => {
        props.navigation.navigate("IndividualReference", {itemId : id});
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
