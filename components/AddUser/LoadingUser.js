import React, {useEffect} from 'react';
import {AsyncStorage, View, ActivityIndicator, StyleSheet} from 'react-native';

import UserSample from '../../userBag.json';

export default function LoadingUser(props) {
    useEffect(() => checkLocalData(), []);

    function checkLocalData() {
        AsyncStorage.getItem('userBags', (err, data) => {
            if (data === null) {
                AsyncStorage.setItem('userBags', JSON.stringify(UserSample.userBags));
                props.navigation.navigate('App');
            } else {
                props.navigation.navigate('App');
            }
        });
    }

    return (
        <View>
            <ActivityIndicator animating={true}/>
        </View>
    );
}