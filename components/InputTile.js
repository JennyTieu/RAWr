import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default InputTile = (props) => {
  const [currentInput, setCurrentInput] = useState("");

  const changeTextHandler = (enteredText) => {
    setCurrentInput(enteredText);
  };

  const addHandler = () => {
    if (currentInput !== '') {
      props.onAdd(currentInput);
    }
  };

  const deleteHandler = () => {
    if (currentInput === '') {
      props.navigation.goBack();
    } else {
      setCurrentInput("");
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Button
        onPress={deleteHandler}
        type="clear"
        icon={
          <Ionicons
            name="md-close-outline"
            size={28}
            color="rgb(0, 122, 255)"
          />
        }
      />
      <TextInput
        placeholder={props.placeholderText}
        style={styles.title}
        onChangeText={changeTextHandler}
        value={currentInput}
      />
      <Button
        onPress={addHandler}
        type="clear"
        icon={
          <Ionicons
            name="md-add"
            size={28}
            color="rgb(0, 122, 255)"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10
  },
  title: {
    fontWeight: "bold",
    width: "70%",
    textAlign: "center",
    color: "#333",
  },
});
