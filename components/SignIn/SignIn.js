import React, {useState, Button} from 'react'
import {Text, View, TouchableHighlight, TextInput} from 'react-native'
import {useDispatch} from 'react-redux'
import axios from "axios"
import {signinUserBag} from '../../user/useractions/userBag'

export default function SignIn ({navigation}){
    const dispatch = useDispatch();
    let user = {}
    const [isSaving, setIsSaving] = useState(false);
    const [user_id, setuserID] = useState(user ? user.user_id : "");
    const [user_password, setuserPW] = useState(user ? user.user_password : "");
    const [user_email, setuserEMAIL] = useState(user ? user.user_email : "");
    const [user_name, setuserNAME] = useState(user ? user.user_name : "");
    const handleSignIn = () => {
        let edit = user != null;
        let user_ = {};
        setIsSaving(false);

        if(edit) {
            user_ = user;
            user_['user_email'] = user_email;
            user_['user_name'] = user_name; 
            user_['user_password'] = user_password;
            user_['user_id'] = user_id;
        } else {
            user_ = {"user_email" : user_email, "user_name" : user_name , "user_password" : user_password, "user_id": user_id };
        }
        let url = "http://192.168.35.13:5001/user/signin/:id";
        axios.post(url, user_)
            .then((data) => dispatch(signinUserBag(data)))
            .catch(error => alert(error.message))

            navigation.navigate('MainScreen')
    }

    return(
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
            <TouchableHighlight onPress = {handleSignIn}><Text>로그인</Text></TouchableHighlight>
        </View>
    )
}
