import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight, View, AsyncStorage, Alert, Icon,
} from 'react-native';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { addMedicineBag, updateMedicineBag } from "../../store/actions/medicineBag";
import { Button, Card } from "react-native-elements";
//import DateInput from './DateInput';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddNewMedicine({ navigation }) {
    const [medicineStartDate, setMedicineStartDate] = useState(new Date(1598051730000));
    const [startmode, setStartMode] = useState('');
    const [startshow, setStartShow] = useState(false);

    const [medicineEndDate, setMedicineEndDate] = useState(new Date(1598051730000));
    const [endmode, setEndMode] = useState('');
    const [endshow, setEndShow] = useState(false);
    const onStartChange = (event, selectedDate) => {
        const currentDate = selectedDate || medicineStartDate;
        setStartShow(Platform.OS === 'ios');
        setMedicineStartDate(currentDate);
    };

    const onEndChange = (event, selectedDate) => {
        const currentDate = selectedDate || medicineEndDate;
        setEndShow(Platform.OS === 'ios');
        setMedicineEndDate(currentDate);
    };

    const showStartMode = currentMode => {
        setStartShow(true);
        setStartMode(currentMode);
    };

    const showEndMode = currentMode => {
        setEndShow(true);
        setEndMode(currentMode);
    }

    const showStartDatepicker = () => {
        showStartMode('date');
    };

    const showTimepicker = () => {
        showStartMode('time');
    };

    const showEndDatepicker = () => {
        showEndMode('date');
    };


    const showEndTimepicker = () => {
        showEndMode('time');
    };

    const dispatch = useDispatch();
    let medicineBag = {};
    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [medicineBagname, setMedicineBagname] = useState(medicineBag ? medicineBag.bagName : "");
    const [medicineConsist, setMedicineConsist] = useState(medicineBag ? medicineBag.bagConsist : "");
    const [consist, setConsist] = useState('');
    const [nextId, setNextId] = useState(0);

    {/*const InputList = medicineConsist.map(mconsist=><View><TextInput
    onChangeText={(text) => setMedicineConsist(text)}
    placeholder={"약 봉투 이름"}
    autoFocus={true}
    style={{ borderWidth: 1, width: 100, paddingBottom: 2, marginBottom: 3 }}
    value={consist} /> <Button onPress = {addInput}/></View>)
    const addInput = ({consist}) => {
        const nextInput = medicineConsist.concat({
            id:nextId,
            consist : consist
        })
        setConsist(consist)
        setNextId(nextId)
        setMedicineConsist(nextInput)
    }*/}
    // Flatlist Data 불러오기
    const onSave = () => {
        let edit = medicineBag !== null;
        let medicineBag_ = {};
        if (edit) {
            medicineBag_ = medicineBag;
            medicineBag_['bagName'] = medicineBagname;
            medicineBag_['bagConsist'] = medicineConsist;
            medicineBag_['bagStartDate'] = medicineStartDate;
            medicineBag_['bagEndDate'] = medicineEndDate;

        } else {
            medicineBag_ = { "bagName": medicineBagname, "bagConsist": medicineConsist, "bagStartDate": medicineStartDate, "bagEndDate": medicineEndDate };
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
                navigation.reset({
                    index: 1,
                    routes: [{ name: 'History' }]
                });
            })
            .catch(error => alert(error.message))
        //이게 원래 너 코드
        alert("약 추가 완료")
    };

    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                    <View style={styles.container}>
                        <TextInput
                            onChangeText={(text) => setMedicineBagname(text)}
                            placeholder={"약 봉투 이름"}
                            autoFocus={true}
                            style={{ borderWidth: 1, width: 100, paddingBottom: 2, marginBottom: 3 }}
                            value={medicineBagname} />
                        <TextInput
                            onChangeText={(text) => setMedicineConsist(text)}
                            style={{ borderWidth: 1, width: 100, paddingBottom: 2 }}
                            autoFocus={true}
                            placeholder={"약 구성"}
                        value={medicineConsist} />
                    </View>

                    <Button buttonStyle={{ width: 100 }} titleStyle={{ color: 'black' }} type="outline" onPress={showStartDatepicker} title="시작 날짜" />
                    <Button buttonStyle={{ width: 100 }} titleStyle={{ color: 'black' }} type="clear" onPress= {showTimepicker} title="시작 시간" />
                    <Button buttonStyle={{ width: 100 }} titleStyle={{ color: 'black' }} type="clear" onPress={showEndDatepicker} title="끝 날짜" />
                    <Button buttonStyle={{ width: 100 }} titleStyle={{ color: 'black' }} type="clear" onPress={showEndTimepicker} title="끝 시간" />

                    {startshow && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={medicineStartDate}
                            mode={startmode}
                            is24Hour={true}
                            display="default"
                            onChange={onStartChange}
                        />
                    )}
                    {endshow && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={medicineEndDate}
                            mode={endmode}
                            is24Hour={true}
                            display="default"
                            onChange={onEndChange}
                        />
                    )}
                    <View style={{ marginLeft: 70 }}>
                        <Button buttonStyle={{ width: 50, height: 30 }} title="저장" onPress={onSave} />
                    </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}

const styles = {
    container: {
        marginTop: 30,
        marginLeft: 20
    }
}