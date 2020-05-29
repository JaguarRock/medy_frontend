import React, {useState} from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, 
Text, TextInput, TouchableHighlight, View, AsyncStorage } from 'react-native';

import {useDispatch} from 'react-redux';
import {Header} from 'react-navigation-stack';
import axios from "axios"
import {addUserBag, updateUserBag} from "../../user/useractions/userBag";

export default function AddNewUser(props) {
    const dispatch = useDispatch();
    //const {navigation} = props;

    //let user = navigation.getParam('userBags', null);
    console.log(props)
    let user = {};
    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [user_password, setuserPW] = useState(user ? user.user_password : "");
    const [user_email, setuserEMAIL] = useState(user ? user.user_email : "");
    const [user_name, setuserNAME] = useState(user ? user.user_name : "");
    // Flatlist Data 불러오기
    const onSave = () => {
        let edit = user !== null;
        let user_ = {};
        setIsSaving(false);
        if (edit) {
            user_ = user;
            user_['user_email'] = user_email;
            user_['user_name'] = user_name; 
            user_['user_password'] = user_password;
            user_['user_id'] = user_id;
        } else {
            user_ = {"user_email" : user_email, "user_name" : user_name , "user_password" : user_password, "user_id": user_id };
        }
        console.log(user_)

       /* AsyncStorage.getItem('users', (err, users) => {
            if (err) alert(err.message);
            else if (users !== null) {
                users = JSON.parse(users);

                if (!edit) {
                    users.unshift(user_);
                } else {
                    const index = users.findIndex((obj) => obj.id === users.id);
                    if (index !== -1) userBas[index] = user_;
                }

                AsyncStorage.setItem('users', JSON.stringify(users), () => {
                    if (!edit) dispatch(addUser(user_));
                    else dispatch(updateUser(user_));
                    navigation.goBack();
                });
            }
        });
        */
       //console.log(navigation.addListener("MedicineScreen"));
      let url = "http://192.168.0.16:5000/user/add";
       axios.post(url, user_)
           .then(res => res.data)
           .then((data) => {
               dispatch(user_ ? updateUserBag(data) : addUserBag(data));
           })
           .catch(error => alert("post error" + error.message))
       navigation.goBack();
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View>
                    <TextInput
                        onChangeText={(text) => setuserID(text)}
                        placeholder={"아이디"}
                        autoFocus={true}
                        value={user_id}/>
                    <TextInput
                        onChangeText={(text) => setuserPW(text)}
                        placeholder={"패스워드"}
                        value={user_password}/>
                    <TextInput
                        onChangeText={(text) => setuserEMAIL(text)}
                        placeholder={"이메일"}
                        autoFocus={true}
                        value={user_email}/>
                    <TextInput
                        onChangeText={(text) => setuserNAME(text)}
                        placeholder={"이름"}
                        value={user_name}/>
                </View>
                <View>
                    <View>
                        <TouchableHighlight onPress={onSave}>
                            <Text>Save</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}
