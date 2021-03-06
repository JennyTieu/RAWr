import React, {useContext, useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Text, Image, ScrollView} from 'react-native';
import { Button } from "react-native-elements";
import {ReferenceContext} from '../data/ReferenceContext';
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';
import { Ionicons } from "@expo/vector-icons";
import Color from '../constants/Colors';

export default EditReferenceScreen = ({route, navigation}) => {

  const[referenceData, setReferenceData] = useContext(ReferenceContext);
  const references = referenceData.referenceItems.filter(item => item.id);

  const itemTagsIds = route.params.itemTags;
  const itemId = route.params.itemId;
  const itemTitle = route.params.itemTitle;
  const itemSource = route.params.itemSource;
  const itemNote = route.params.itemNote; 
  const itemImage = route.params.itemImage; 

  const [valueMS, setValueMS] = useState(itemTagsIds);
  
  const [titleInput, setTitleInput] = useState("");
  const [sourceInput, setSourceInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const onChangeMS = (value) => {
    setValueMS(value);
  };

  const changeSourceHandler = (enteredText) => {
    setSourceInput(enteredText);
  };

  const changeTitleHandler = (enteredText) => {
    setTitleInput(enteredText);
  };

  const changeNoteHandler = (enteredText) => {
    setNoteInput(enteredText);
  };

  const addHandler = () => {
    if (sourceInput !== '') {   
      for (let i = 0; i < references.length; i++) {
        if (references[i].source === itemSource) {
          references[i].source = sourceInput;   
        }
      }
    }

    if (titleInput !== '') {   
      for (let i = 0; i < references.length; i++) {
        if (references[i].title === itemTitle) {
          references[i].title = titleInput;   
        }
      }
    }

    if (noteInput !== '') {   
      for (let i = 0; i < references.length; i++) {
        if (references[i].comment === itemNote) {
          references[i].comment = noteInput;   
        }
      }
    }

    for (let i = 0; i < references.length; i++) {
      if (references[i].tagIds === itemTagsIds) {
        references[i].tagIds = valueMS;   
      }
    }
    
    setReferenceData(referenceData => ({
      tags: referenceData.tags,
      referenceItems: referenceData.referenceItems,
      idCounterTags: referenceData.idCounterTags,
      idCounterReferences: referenceData.idCounterReferences
    }));

    navigation.goBack();
  };
 
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.topContainer}>      
            <Image source={itemImage} style={styles.image}/>
          </View>
          <View style={styles.middleContainer}> 
            <Text style={styles.text}>Change Title:</Text>
            <TextInput
              placeholder={itemTitle}
              style={styles.inputBox}
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onChangeText={changeTitleHandler}
              value={titleInput}
            />
            <Text style={styles.text}>Change Source:</Text>
            <TextInput
              placeholder={itemSource}
              style={styles.inputBox}
              onChangeText={changeSourceHandler}
              value={sourceInput}
            />
            <Text style={styles.text}>Change Note:</Text>
            <TextInput
              placeholder={itemNote}
              style={styles.inputBox}
              onChangeText={changeNoteHandler}
              value={noteInput}
            />
            <View style={styles.dropdownContainer}>
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
          </View>
          <View style={styles.bottomContainer}>
            <Button
              onPress={addHandler}
              type="solid"
              title="Save"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
              icon={
                <Ionicons
                  name="md-checkmark-circle-outline"
                  size={32}
                  color="white"
                />
              }
            />
          </View>
        </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f1f2f6",
  },
  topContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  middleContainer: {
    flex: 3,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 20,
    marginBottom:20
  },
  inputBox:{
    fontWeight: "bold",
    width: "100%",
    margin: 10,
    padding: 10,
    alignItems: "center",
    borderColor: 'gray',
    borderWidth: 1
  },
  dropdownContainer: {
    paddingTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    width: "100%"
  },
  text: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  title: {
    color: "black",
    fontSize: 26,
  },
  button: {
    backgroundColor: Color.iconColor,
  },
  buttonText: {
    fontSize: 20,
  },
  image: {
    height: 320,
    width: 320,
    maxWidth: "95%",
    maxHeight: "95%",
    alignItems:'center',
    justifyContent: 'center',
    resizeMode:'contain',
    marginTop: 20,
    backgroundColor:"white"
  }
});