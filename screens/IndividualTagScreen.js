import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import {ReferenceContext} from '../data/ReferenceContext';
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

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

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Individual Tag Screen of {tagTitle}</Text>
      </View>
      <View style={styles.middleContainer}>
        <Button
          onPress={deleteTextHandler}
          type="clear"
          icon={
            <Ionicons
              name="md-close-outline"
              size={32}
              color="rgb(0, 122, 255)"
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
              color="rgb(0, 122, 255)"
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
                        color="rgb(0, 122, 255)"
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
          title="delete tag"
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
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  middleContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imagesText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf:"center",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    color: "black",
    fontSize: 26,
  },
  button: {
    backgroundColor: "#8b0000",
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