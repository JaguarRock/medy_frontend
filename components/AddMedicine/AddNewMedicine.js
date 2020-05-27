import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight, View, AsyncStorage, Alert, Icon
} from 'react-native';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { addMedicineBag, updateMedicineBag } from "../../store/actions/medicineBag";
import {Button} from "react-native-elements"
export default function AddNewMedicine({navigation}) {
    const dispatch = useDispatch();
    //const { navigation } = props;
    let medicineBag = {};

    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [medicineBagname, setMedicineBagname] = useState(medicineBag ? medicineBag.bagName : "");
    const [medicineConsist, setMedicineConsist] = useState(medicineBag ? medicineBag.bagConsist : "");
    
    // Flatlist Data 불러오기
    const onSave = () => {
        let edit = medicineBag !== null;
        let medicineBag_ = {};
        if (edit) {
            medicineBag_ = medicineBag;
            medicineBag_['bagName'] = medicineBagname;
            medicineBag_['bagConsist'] = medicineConsist;

        } else {
            medicineBag_ = { "bagName": medicineBagname, "bagConsist": medicineConsist };
        }

        // AsyncStorage.getItem('medicineBags', (err, medicineBags) => {
        //     if (err) alert(err.message);
        //     else if (medicineBags !== null) {
        //         medicineBags = JSON.parse(medicineBags);

        //         if (!edit) {
        //             medicineBags.unshift(medicineBag_);
        //         } else {
        //             const index = medicineBags.findIndex((obj) => obj.id === medicineBags.id);
        //             if (index !== -1) medicineBas[index] = medicineBag_;
        //         }

        //         AsyncStorage.setItem('medicineBags', JSON.stringify(medicineBags), () => {
        //             if (!edit) dispatch(addMedicineBag(medicineBag_));
        //             else dispatch(updateMedicineBag(medicineBag_));
        //             navigation.goBack();
        //         });
        //     }
        // });
        let url = "http://192.168.35.13:5001/medicineBag/add";
        axios.post(url, medicineBag_)
            .then(res => res.data)
            .then((data) => {
                dispatch(medicineBag_ ? updateMedicineBag(data) : addMedicineBag(data));
                //navigation.replace('MainScreen');
            })
            .catch(error => alert(error.message))
            navigation.goBack();
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View style = {styles.container}>
                    <TextInput
                        onChangeText={(text) => setMedicineBagname(text)}
                        placeholder={"약 봉투 이름"}
                        autoFocus={true}
                        style = {{borderWidth : 1, width : 100, paddingBottom : 2, marginBottom : 3}}
                        value={medicineBagname} />
                    <TextInput
                        onChangeText={(text) => setMedicineConsist(text)}
                        style = {{borderWidth : 1, width : 100, paddingBottom : 2}}
                        placeholder={"약 구성"}
                        value={medicineConsist} />
                </View>
                <View>
                    <View style = {{marginLeft : 70}}>
                        <Button buttonStyle = {{width : 50, height : 30}} title = "저장" onPress={onSave}/>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}

const styles = {
    container : {
        marginTop : 30,
        marginLeft : 20
    }
}