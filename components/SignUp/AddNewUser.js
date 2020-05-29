import React, {useState} from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, 
Text, TextInput, TouchableHighlight, View, AsyncStorage } from 'react-native';

import {useDispatch} from 'react-redux';
import axios from "axios"
import {addUserBag, updateUserBag} from "../../user/useractions/userBag";

export default function AddNewUser({navigation}) {
    const dispatch = useDispatch();
    //const {navigation} = props;

    //let user = navigation.getParam('userBags', null);
    let user = {};
    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [user_id, setuserID] = useState(user ? user.user_id : "");
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
      let url = "http://192.168.35.13:5001/user/add";
       axios.post(url, user_)
           .then(res => res.data)
           .then((data) => {
               dispatch(user_ ? updateUserBag(data) : addUserBag(data));
           })
           .catch(error => alert("post error" + error.message))
       
       alert('회원가입 완료')
       navigation.replace('MainScreen');
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View style = {styles.container}>
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
                    <View style = {styles.container}>
                        <TouchableHighlight onPress={onSave}>
                            <Text>회원가입</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}

const styles = {
    container : {
       marginLeft : 150,
       marginTop :150
    }
}