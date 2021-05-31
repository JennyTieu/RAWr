import React, {useContext, useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard, StyleSheet, TextInput, Text} from 'react-native';
import { Button } from "react-native-elements";
import {ReferenceContext} from '../data/ReferenceContext';
import ReferenceItem from '../models/referenceItem';
import { MultiselectDropdown} from 'sharingan-rn-modal-dropdown';
import { Ionicons } from "@expo/vector-icons";

export default EditReferenceScreen = ({route, navigation}) => {

  const [refData, setRefData] = useContext(ReferenceContext);

  const [titleInput, setTitleInput] = useState("");
  const [sourceInput, setSourceInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const[referenceData] = useContext(ReferenceContext);
  const [valueMS, setValueMS] = useState([]);

  const itemId = route.params.itemId;
  const itemTitle = route.params.itemTitle;
  const itemSource = route.params.itemSource;
  const itemNote = route.params.itemNote;

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
    	
  };
 
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <View style={styles.topContainer}>      
          <Text>Edit Reference Screen</Text>
        </View>
        <View style={styles.middleContainer}> 
          <Text>Title</Text>
          <TextInput
            placeholder={itemTitle}
            style={styles.inputBox}
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            onChangeText={changeTitleHandler}
            value={titleInput}
          />
          <Text>Source</Text>
          <TextInput
            placeholder={itemSource}
            style={styles.inputBox}
            onChangeText={changeSourceHandler}
            value={sourceInput}
          />
          <Text>Note</Text>
          <TextInput
            placeholder={itemNote}
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
        </View>
        <View style={styles.bottomContainer}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f1f2f6",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  middleContainer: {
    flex: 5,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
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