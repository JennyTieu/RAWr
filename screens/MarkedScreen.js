import React, {useContext} from 'react';
import ReferenceList from '../components/ReferenceList';
import{ReferenceContext} from '../data/ReferenceContext';

export default MarkedScreen = ({ route, navigation}) => {
    const[referenceData] = useContext(ReferenceContext);
    const markedReferences = referenceData.referenceItems.filter(item => item.isMarked);

    return <ReferenceList listData={markedReferences} navigation={navigation}/>;
};