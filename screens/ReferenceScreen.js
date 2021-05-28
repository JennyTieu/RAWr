import React, {useLayoutEffect, useContext} from 'react';
import ReferenceList from '../components/ReferenceList';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

import {ReferenceContext} from "../data/ReferenceContext";

export default ReferenceScreen = ({route, navigation}) => {
    const [referenceData] = useContext(ReferenceContext);
    const {itemId} = route.params;
    const selectedReference = referenceData.referenceItems.filter(item => item.id === itemId);

    return <ReferenceList listData={selectedReference} navigation={navigation}/>;
}