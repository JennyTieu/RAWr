import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {Ionicons, FontAwesome5, AntDesign} from '@expo/vector-icons';
import {Chip} from 'react-native-paper';




export default ReferenceItemTile = (props) => {
    const markedIconName = props.isMarked ? 'md-bookmark' : 'md-bookmark-outline';
    const usedIconName = props.isUsed ? 'md-checkmark-circle' : 'md-checkmark-circle-outline';
    

    const dataSource = props.tagIds;

    

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
            <View style={styles.noteContainer}>
                <FontAwesome5 name='copyright' size={24}/>
                <Text>      {props.source}</Text>
            </View>
            <View style={styles.noteContainer}>
                <FontAwesome5 name='sticky-note' size={24}/>
                <Text>      {props.comment}</Text>
            </View>
            <View style={styles.noteContainer}> 
                <FontAwesome5 name='hashtag' size={24}/>
                <View style={{flex:1, width:"100%", flexDirection:"row",alignContent: "space-between",flexWrap: 'wrap'}}>{
                    dataSource.map((item,index) => {
                        return (
                        <View key={index}
                            style={{
                            margin: 5,
                            flexWrap: 'wrap'
                            }}>
                            <Chip key={index} mode="flat" height={30} textStyle={{  fontSize:15}} style={{backgroundColor:"gray"}} style={{alignItems: "center"}} onPress={()=> console.log(item)}>
                                {item}
                            </Chip>
                        </View>
                    
                        );
                    })}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    onPress={() => {}}
                    type="clear"
                    title=' Edit'
                    icon={<AntDesign name='edit' size={24} color="rgb(0, 122, 255)"/>}
                />
                <Button
                    onPress={() => {props.onDelete(props.id)}}
                    type="clear"
                    icon={
                    <Ionicons
                        name="trash-sharp"
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
        backgroundColor: 'white'
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
    noteContainer:{
        padding: 10,
        flex: 1,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    title: {
      fontWeight: "bold",
      color: "#333",
    },
    image:{
      height: 500,
      width:'100%',
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      width:'100%',
      resizeMode:'contain',
    }
});