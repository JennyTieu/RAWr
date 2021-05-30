import React, {useContext, useState} from "react";
import {View, StyleSheet, Modal, Text, FlatList} from "react-native";
import {Button, Switch} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import{ReferenceContext} from '../data/ReferenceContext';
import GridTileTags from "../components/GridTileTags";

export default SearchScreen = (props) => {

  const[referenceData] = useContext(ReferenceContext);
  const tags = referenceData.tags.filter(item => item.title);
  const [modalVisible, setModalVisible] = useState(false);

  const clickHandler = () => {

  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        SpeechRecognitionAlternative.alert("Modal has been closed");
        setModalVisible(!modalVisible);
      }}  
    >
      <View style={styles.screenContainer}>
        <View style={styles.topContainer}>
          <Button 
            type="clear"
            icon={<Ionicons name="md-return-down-back" size={34}/>}
            onPress={props.onCancelModal}
          />
          <Text>Filter</Text>
        </View>
        <View style={styles.middleContainer}>
          <FlatList
            data={tags}
            renderItem={(itemData) => {
              return (
                <GridTileTags 
                  onClick={clickHandler}
                  title={itemData.item.title}
                  id={itemData.item.id}
                />
              )
            }}
            numColumns={2}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Switch style={styles.switch} value={false}/>
          <Text>hide used references</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    margin: 30,
    backgroundColor: "lightgrey",
    borderRadius: 10
  },
  topContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  middleContainer: {
    flex: 6,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  switch: {
    transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }]
  }
})