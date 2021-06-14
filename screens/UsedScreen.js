import React, {useContext,  useState} from 'react';
import ReferenceList from '../components/ReferenceList';
import{ReferenceContext} from '../data/ReferenceContext';
import { Button} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import { View ,StyleSheet} from 'react-native';
import GridTileList from '../components/GridTileList';

export default UsedScreen = ({ route, navigation}) => {
  
    
    const [gridLayout, setGridLayout] = useState(false);
    const layoutHandler = () =>{
        setGridLayout(!gridLayout);
    }
    const layoutStyleIcon = gridLayout==true? 'md-grid-outline':'md-grid';
    const[referenceData] = useContext(ReferenceContext);
    const usedReferences = referenceData.referenceItems.filter(item => item.isUsed);

    if(gridLayout===true){
      return (
        <View>
          <View style={styles.topContainer}>
            <Button type= "clear"
                    icon={
                      <Ionicons
                        name={layoutStyleIcon}
                        size={40}
                        color="gray"
                      />}
                    onPress={layoutHandler} />
          </View>
          <View style={styles.middleContainer}>
            <GridTileList listData={usedReferences} navigation={navigation}/>
          </View>
        </View>
      );
    }else{
      return (
            <View>
              <View style={styles.topContainer}>
                <Button type= "clear"
                        icon={
                          <Ionicons
                            name={layoutStyleIcon}
                            size={40}
                            color="gray"
                          />}
                        onPress={layoutHandler} />
              </View>
              <View style={styles.middleContainer}>
                <ReferenceList listData={usedReferences} navigation={navigation}/>
              </View>
            </View>
          );
    }
    
}
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  middleContainer: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 130,
  },
})