import React, { useState,useContext } from "react";
import { StyleSheet, View, TextInput ,Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import TAGS from '../data/dummy-data';
import {ReferenceContext} from '../data/ReferenceContext';
import * as ImagePicker from "expo-image-picker";
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';

export default AddReferenceTile = (props) => {

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [selectedImage, setSelectedImage] = useState(null);

  
  const [titleInput, setTitleInput] = useState("");
  const [sourceInput, setSourceInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [tagChoice, setTagChoice] = useState([]);

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
    
    //if (currentInput !== '') {
    //  props.onAdd(currentInput);
    //}
  };

  const deleteHandler = () => {
    if (currentInput === '') {
      props.navigation.goBack();
    } else {
      setCurrentInput("");
    }
  };

  const verifyPermissions = async (permission) => {
    // const result = await Permissions.askAsync(permission);
    const result = permission === ImagePicker ?
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    : await permission.requestPermissionsAsync();

    if (result.status !== "granted") {
      Alert.alert(
        "No permissions!",
        "Please give permissions to use this app.",
        [{ text: "Ok" }]
      );
      return false;
    } else {
      return true;
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
            
            <View style={[styles.cameraPreview]}>
              {selectedImage === null?(
                <Image
                  source={require("../assets/addRef.png")}
                  style={styles.cameraPreview}
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
                    color="rgb(0, 122, 255)"
                  />}
                onPress={showImagePicker} />
            <Button type= "clear" 
              icon={
                <Ionicons
                  name="md-camera"
                  size={60}
                  color="rgb(0, 122, 255)"
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
            primaryColor="pink"
            value={valueMS}
            onChange={onChangeMS}
          />
        </View>

        <Button
          onPress={addHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-checkmark-circle-outline"
              size={24}
              color="rgb(0, 122, 255)"
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
    backgroundColor: "#f1f2f6",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
  },
  cameraPreview: {
    width: 300,
    height: 300,
    resizeMode: "contain"
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
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    width: "100%"
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});
