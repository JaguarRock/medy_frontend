import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Text,
ActivityIndicator, TouchableHighlight, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import {deleteUserBag, getUserBags} from '../../user/useractions/userBag'
import UserList from './UserList'

export default function UserScreen(props){
    const dispatch  = useDispatch();
    const {navigation} = props;

    const [isFetching, setIsFetching] = useState(false);

    const dataReducer = useSelector((state) => state.user);
    const {userBags} = dataReducer;
    
    useEffect(()=> getData(), []);

    const getData = () => {
        setIsFetching(true);

        /*AsyncStorage.getItem('userBags', (err, userBags) => {
            if (err) alert (err.message);
            else if (userBags !== null) dispatch(getUserBags(JSON.parse(userBags)));
            setIsFetching(false);
        })*/
        let url = "http://192.168.0.22:5001/user"
        axios.get(url)
            .then(res => res.data)
            .then((data) => dispatch(getUserBags(data)))
            .catch(error => alert("cantget"+error.message))
            .finally(() => setIsFetching(false));
    }


    const renderItem = ({item, index}) => {
        return (
            <UserList item = {item} index = {index} onDelete={onDelete}/>
        )
    }

    const onDelete = (_id) => {
        // AsyncStorage.getItem('medicineBags', (err, medicineBags) => {
        //     if (err) alert(err.message);
        //     else if (medicineBags != null) {
        //         medicineBags = JSON.parse(medicineBags);
        //         const index = medicineBags.findIndex((obj) => obj.id === id);
        //         if (index !== -1) medicineBags.splice(index, 1);

        //         AsyncStorage.setItem('medicineBags', JSON.stringify(medicineBags), () => dispatch(deleteMedicineBag(id)));
        //     }
        // }}
        let url = "http://192.168.0.22:5001/user/";
        axios.delete(url + _id)
            .then((res) => dispatch(deleteUserBag(_id)))
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false));
    }


    if (isFetching) {
        return (
            <View>
                <ActivityIndicator animating = {true}/>
            </View>
        )
    }
    else {
        return (
            <SafeAreaView>
                <FlatList
                    data = {userBags}
                    renderItem = {renderItem}
                    keyExtractor = {(item, index) => `userBags_${index}`}
                />
                <TouchableHighlight onPress={() => navigation.navigate('AddNewUser', {title: "Add New User"})}>
                    <Text style = {{fontSize : 20, color : 'red'}}>Add New</Text>
                </TouchableHighlight>
            </SafeAreaView>
        )
    }
}