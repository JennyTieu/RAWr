import React, {useContext} from 'react';
import ReferenceList from '../components/ReferenceList';
import{ReferenceContext} from '../data/ReferenceContext';

export default UsedScreen = ({ route, navigation}) => {
    const[referenceData] = useContext(ReferenceContext);
    const usedReferences = referenceData.referenceItems.filter(item => item.isUsed);

    return <ReferenceList listData={usedReferences} navigation={navigation}/>;
};