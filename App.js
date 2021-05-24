import React, { useState } from 'react';
import MainNavigator from './navigation/MainNavigator';
import {ReferenceContext} from './data/ReferenceContext';
import{ TAGS, REFERENCEITEMS, IDCOUNTERTAGS, IDCOUNTERREFERENCES} from './data/dummy-data';

export default (App) => {
  const [referenceData, setReferenceData] = useState({
    tags: TAGS,
    referenceItems: REFERENCEITEMS,
    idCOunterTags: IDCOUNTERTAGS,
    idCounterReferences: IDCOUNTERREFERENCES
  });



  return (
//    <View style={styles.container}>
      //how to add images
//      <Image style={styles.image} source={require('./data/artworks/for__infinity/48stylised.jpg')}/>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
    <ReferenceContext.Provider value ={[referenceData, setReferenceData]}>
      <MainNavigator />
    </ReferenceContext.Provider>
  );
}


