import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';



export default ReferenceItemTile = (props) => {
    const markedIconName = props.isMarked ? 'md-bookmark' : 'md-bookmark-outline';
    const usedIconName = props.isUsed ? 'md-checkmark-circle' : 'md-checkmark-circle-outline';
    return (
        <View style={styles.itemContainer}>
            
            
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={() => {props.onMarked(props.id)}}
                    type= 'clear'
                    icon={
                        <Ionicons name={markedIconName} size={24} color= 'rgb(0,122,255)' />
                    }
                />
                <Text style={styles.title}>{props.title}</Text>
                <Button 
                    onPress={() => {props.onUsed(props.id)}}
                    type= 'clear'
                    icon={
                        <Ionicons name={usedIconName} size={24} color= 'rgb(0,122,255)' />
                    }
                />
            </View>
            <Image style={styles.image} source={props.image}/>
            
            <View >
                
                <Text>Source: {props.source}</Text>
                <Text>Note: {props.comment}</Text>
                <Button
                    onPress={() => {props.onDelete(props.id)}}
                    type="clear"
                    icon={
                    <Ionicons
                        name="md-close-circle-outline"
                        size={24}
                        color="rgb(0, 122, 255)"
                    />
                    }
                />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        marginVertical: 15,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'gray'
    },
    buttonContainer:{
        flex: 1,
        
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    title: {
      fontWeight: "bold",
      color: "#333",
    },
    image:{
      height:500,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      width:'100%',
      resizeMode:'contain'
    }
});