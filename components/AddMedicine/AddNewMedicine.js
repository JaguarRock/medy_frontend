import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight, View, AsyncStorage
} from 'react-native';

import { useDispatch } from 'react-redux';
import axios from "axios";

import { addMedicineBag, updateMedicineBag } from "../../store/actions/medicineBag";

export default function AddNewMedicine(props) {
    const dispatch = useDispatch();
    const { navigation } = props;
    let medicineBag = navigation.getParam('medicineBags', null);

    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [medicineBagname, setMedicineBagname] = useState(medicineBag ? medicineBag.bagName : "");
    const [medicineConsist, setMedicineConsist] = useState(medicineBag ? medicineBag.bagConsist : "");


    // Flatlist Data 불러오기
    const onSave = () => {
        let edit = medicineBag !== null;
        let medicineBag_ = {};
        setIsSaving(false);
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
        console.log(navigation.addListener("MedicineScreen"));
        let url = "http://192.168.0.51:5000/medicineBag/add";
        axios.post(url, medicineBag_)
            .then(res => res.data)
            .then((data) => {
                dispatch(medicineBag_ ? updateMedicineBag(data) : addMedicineBag(data));
            })
            .catch(error => alert(error.message))
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <View>
                    <TextInput
                        onChangeText={(text) => setMedicineBagname(text)}
                        placeholder={"약 봉투 이름"}
                        autoFocus={true}
                        value={medicineBagname} />
                    <TextInput
                        onChangeText={(text) => setMedicineConsist(text)}
                        placeholder={"약 구성"}
                        value={medicineConsist} />
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