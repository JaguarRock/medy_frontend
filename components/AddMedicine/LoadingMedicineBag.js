import React, {useEffect} from 'react';
import {AsyncStorage, View, ActivityIndicator, StyleSheet} from 'react-native';

import MedicineSample from '../../medicineBag.json';
import { AppLoading } from 'expo';

export default function LoadingMedicineBag(props) {
    useEffect(() => checkLocalData(), []);

    function checkLocalData() {
        AsyncStorage.getItem('medicineBags', (err, data) => {
            if (data === null) {
                AsyncStorage.setItem('medicineBags', JSON.stringify(MedicineSample.medicineBags));
                props.navigation.navigate('App');
            } else {
                props.navigation.navigate('App');
            }
        });
    }

    return <AppLoading/>
}