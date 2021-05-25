import React, {useState} from "react";
import {View, StyleSheet, Modal, Text} from "react-native";
import {Button} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";

export default SearchScreen = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

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
          <Text>SearchScreen</Text>
          <Button 
            type="clear"
            icon={<Ionicons name="md-return-down-back" size={30}/>}
            onPress={props.onCancelModal}
          />
        </View>
        <View style={styles.middleContainer}>

        </View>
        <View style={styles.buttomContainer}>

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
    flex: 2,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  middleContainer: {
    flex: 4,
    padding: 30,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 2,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
})