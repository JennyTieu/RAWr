import React, {useLayoutEffect, useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import {ReferenceContext} from '../data/ReferenceContext';
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Color from '../constants/Colors';

export default IndividualTagScreen = ({route, navigation}) => {

  const[referenceData, setReferenceData] = useContext(ReferenceContext);
  const tags = referenceData.tags.filter(item => item.title);

  const tagTitle = route.params.itemTitle;
  const tagId = route.params.itemId;
  const images = route.params.tagImages;

  const [imageSource, setImageSource] = useState(images);
  const [currentInput, setCurrentInput] = useState("");
  let [counterFirstPic, setCounterFirstPic] = useState(0);
  let [counterSecondPic, setCounterSecondPic] = useState(1);
  let [counterThirdPic, setCounterThirdPic] = useState(2);

  const deleteTextHandler = () => {
    if (currentInput === '') {
      navigation.goBack();
    } else {
      setCurrentInput("");
    }
  };

  const deleteTagHandler = () => {  
    setReferenceData(referenceData => ({
      tags: referenceData.tags.filter(tag => tag.title != tagTitle),
      referenceItems: referenceData.referenceItems,
      idCounterTags: referenceData.idCounterTags,
      idCounterReferences: referenceData.idCounterReferences
    }));
    
    navigation.goBack();
  };

  const changeTextHandler = (enteredText) => {
    setCurrentInput(enteredText);
  };

  const changeTagTitleHandler = () => {
    if (currentInput !== '') {   
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].title === tagTitle) {
          tags[i].title = currentInput;   

          setReferenceData(referenceData => ({
            tags: referenceData.tags,
            referenceItems: referenceData.referenceItems,
            idCounterTags: referenceData.idCounterTags,
            idCounterReferences: referenceData.idCounterReferences
          }));
        }
      }

      navigation.goBack();
    } 
  };

  const showMorePicsHandler = () => {
    if (counterFirstPic+1 != images.length && counterSecondPic+1 != images.length && counterThirdPic+1 != images.length) {
      setCounterFirstPic(counterFirstPic+1);
      setCounterSecondPic(counterSecondPic+1);
      setCounterThirdPic(counterThirdPic+1);
    } else if (counterFirstPic+3 == images.length) {
      setCounterFirstPic(counterFirstPic+1);
      setCounterSecondPic(counterSecondPic+1);
      setCounterThirdPic(0);
    } else if (counterFirstPic+2 == images.length) {
      setCounterFirstPic(counterFirstPic+1);
      setCounterSecondPic(0);
      setCounterThirdPic(1);
    } else if (counterFirstPic+1 == images.length) {
      setCounterFirstPic(0);
      setCounterSecondPic(1);
      setCounterThirdPic(2);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: tagTitle,
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior={"height"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screenContainer}>
          <View style={styles.middleContainer}>
            <Button
              onPress={deleteTextHandler}
              type="clear"
              icon={
                <Ionicons
                  name="md-close-outline"
                  size={32}
                  color={Color.iconColor}
                />
              }
            />
            <TextInput
              placeholder={tagTitle}
              style={styles.title}
              onChangeText={changeTextHandler}
              value={currentInput}
            />
            <Button
              onPress={changeTagTitleHandler}
              type="clear"
              icon={
                <Ionicons
                  name="md-pencil"
                  size={32}
                  color={Color.iconColor}
                />
              }
            />
          </View>
          <View>
            <Text style={styles.imagesText}>References with this tag:</Text>
          </View>
          {images.length === 1 ?
            (
              <View style={styles.imageContainer}>
                <Text>References marked by this tag</Text>
                <Image style={styles.image} source={imageSource[0]}/> 
              </View>
            ) : (
              images.length === 2 ? 
              (
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={imageSource[0]}/>
                  <Image style={styles.image} source={imageSource[1]}/>
                </View>
              ) : (
                images.length === 3 ? (
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageSource[0]}/>
                    <Image style={styles.image} source={imageSource[1]}/>
                    <Image style={styles.image} source={imageSource[2]}/> 
                  </View>
                ) : (
                  images.length === 4 ? (
                    <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageSource[0]}/>
                    <Image style={styles.image} source={imageSource[1]}/>
                    <Image style={styles.image} source={imageSource[2]}/> 
                    <Image style={styles.image} source={imageSource[3]}/>
                  </View>
                  ) : (
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={imageSource[counterFirstPic]}/>
                      <Image style={styles.image} source={imageSource[counterSecondPic]}/>
                      <Image style={styles.image} source={imageSource[counterThirdPic]}/>
                      <Button 
                        onPress={showMorePicsHandler}
                        type="clear"
                        buttonStyle={styles.plusButton}
                        icon={
                          <Ionicons
                            name="chevron-forward"
                            size={38}
                            color={Color.iconColor}
                          />
                        }          
                      /> 
                    </View>
                  )
                )
              )
            )
          } 
          <View style={styles.bottomContainer}>
            <Button 
              onPress={deleteTagHandler}
              type="solid"
              title="Delete Tag"
              titleStyle={styles.text}
              buttonStyle={styles.button}
              icon={
                <Ionicons
                  name="md-trash-outline"
                  size={30}
                  color="white"
                />
              }
            />
          </View>
        </View> 
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    justifyContent:"space-evenly"
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  middleContainer: {
    flexDirection: "row",
    height:"20%",
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 60
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imagesText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf:"center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
  title: {
    color: "black",
    fontSize: 26,
  },
  button: {
    backgroundColor: Color.iconColor,
  },
  plusButton: {
    width: 50,
    height: 100,
  },
  image: {
    width: 95,
    height: 95,
  },
});
