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
    <ReferenceContext.Provider value ={[referenceData, setReferenceData]}>
      <MainNavigator />
    </ReferenceContext.Provider>
  );
}


