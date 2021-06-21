import React, { useState,useContext } from "react";
import { StyleSheet, View, TextInput ,Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import {ReferenceContext} from '../data/ReferenceContext';
import * as ImagePicker from "expo-image-picker";
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';
import Color from '../constants/Colors';

export default AddReferenceTile = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);

  
  const [titleInput, setTitleInput] = useState("");
  const [sourceInput, setSourceInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const[referenceData] = useContext(ReferenceContext);
  const [valueMS, setValueMS] = useState([]);

  const onChangeMS = (value) => {
    setValueMS(value);
  };
  

  const changeTitleHandler = (enteredText) => {
    setTitleInput(enteredText);
  };

  const changeSourceHandler = (enteredText) => {
    setSourceInput(enteredText);
  };

  const changeNoteHandler = (enteredText) => {
    setNoteInput(enteredText);
  };


  const addHandler = () => {
    //nur comment/note und source können leer bleiben!
    if(selectedImage!==null && titleInput !== "" && valueMS.length !==0){
      props.onAdd(valueMS, titleInput, noteInput, sourceInput, { uri: selectedImage.localUri });
    }
    
  
  };

 



  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setSelectedImage({ localUri: result.uri });
    }
  }

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setSelectedImage({ localUri: result.uri });
    }
  }

  

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.topContainer}>
            
            <View style={[styles.cameraPreviewBlank]}>
              {selectedImage === null?(
                <Image
                  source={require("../assets/addRef.png")}
                  style={styles.cameraPreviewBlank}
                />
              ) : (
                <TouchableOpacity onPress={() => setSelectedImage(null)}>
                  <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.cameraPreview}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button type= "clear"
                icon={
                  <Ionicons
                    name="md-images"
                    size={60}
                    color={Color.primary}
                  />}
                onPress={showImagePicker} />
            <Button type= "clear" 
              icon={
                <Ionicons
                  name="md-camera"
                  size={60}
                  color={Color.primary}
                />} 
              onPress={openCamera} />
            </View>
            
        </View>
        
        <TextInput
          placeholder="Title"
          style={styles.inputBox}
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          onChangeText={changeTitleHandler}
          value={titleInput}
        />
        <TextInput
          placeholder="Source"
          style={styles.inputBox}
          onChangeText={changeSourceHandler}
          value={sourceInput}
        />
        <TextInput
          placeholder="Note"
          style={styles.inputBox}
          onChangeText={changeNoteHandler}
          value={noteInput}
        />
        <View style={styles.container}>
          <MultiselectDropdown
            label="Tags"
            data={referenceData.tags}
            enableSearch
            chipType="flat"
            primaryColor={Color.lightBackground}
            value={valueMS}
            onChange={onChangeMS}
          />
        </View>

        <Button
          onPress={addHandler}
          type="solid"
          title="Add Reference"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          icon={
            <Ionicons
              name="md-checkmark-circle-outline"
              size={30}
              color="white"
            />
          }
        />
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal:10,
    backgroundColor: "#f1f2f6",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
  },
  cameraPreview: {
    width: 320,
    height: 320,
    alignItems:'center',
    justifyContent: 'center',
    resizeMode: "contain",
    backgroundColor:"white"
  },
  cameraPreviewBlank: {
    width: 320,
    height: 320,
    alignItems:'center',
    justifyContent: 'center',
    resizeMode: "contain",
  },
  itemContainer: {
    flex: 1,
    marginVertical: 15,
    padding:10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    
  },
  title: {
    fontWeight: "bold",
    color: "#333",
  },
  inputBox:{
    fontWeight: "bold",
    width: "100%",
    margin: 15,
    padding:10,
    alignItems: "center",
    borderColor: 'gray',
    borderWidth: 1
  },
  verticalContainer: {
    alignItems: "center",
  },
  buttonContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    paddingTop: 20,
    paddingBottom:30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    width: "100%"
  },
  button: {
    backgroundColor: Color.iconColor,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});
