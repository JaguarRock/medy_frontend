import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView, SafeAreaView, StyleSheet,
    Text, TextInput, TouchableHighlight, View, AsyncStorage, Alert, Icon, Platform
} from 'react-native';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { addMedicineBag, updateMedicineBag } from "../../store/actions/medicineBag";
import { Button, Card } from "react-native-elements";
//import DateInput from './DateInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-ranges';
import Dates from 'react-native-dates'

import moment from 'moment'

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

    const showEndDatepicker = () => {
        showEndMode('date');
    };

    const dispatch = useDispatch();
    let medicineBag = {};
    // 변수 선언
    const [isSaving, setIsSaving] = useState(false);
    const [medicineBagname, setMedicineBagname] = useState(medicineBag ? medicineBag.bagName : "");
    const [medicineConsist, setMedicineConsist] = useState(medicineBag ? medicineBag.bagConsist : "");
    const [medicineTime, setMedicineTime] = useState(medicineBag ? medicineBag.bagTime : "");

    // Flatlist Data 불러오기
    const onSave = () => {
        let edit = medicineBag !== null;
        let medicineBag_ = {};
        if (edit) {
            medicineBag_ = medicineBag;
            medicineBag_['bagName'] = medicineBagname;
            medicineBag_['bagConsist'] = medicineConsist;
            medicineBag_['bagTime'] = medicineTime;
            medicineBag_['bagStartDate'] = medicineStartDate;
            medicineBag_['bagEndDate'] = medicineEndDate;
        } else {
            medicineBag_ = { "bagName": medicineBagname, "bagConsist": medicineConsist, "bagTime": medicineTime, "bagStartDate": medicineStartDate, "bagEndDate": medicineEndDate };
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
        let url = "http://192.168.0.16:5001/medicineBag/add";
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
    const placeholder = {
        label: '복약시간',
        value: null,
        color: '#9EA0A4',
    };
    return (
        <KeyboardAvoidingView>
            <SafeAreaView>
                <Card containerStyle={{
                    marginTop: '7%', borderRadius: 7, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 3.2
                }}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>약 봉투 이름 </Text>
                            <TextInput
                                onChangeText={(text) => setMedicineBagname(text)}
                                placeholder={"약 봉투 이름"}
                                style={{ borderWidth: 1, width: 150, paddingBottom: 2, marginBottom: 3, marginLeft: 40 }}
                                value={medicineBagname} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>약 구성 1 </Text>
                            <TextInput
                                onChangeText={(text) => setMedicineConsist(text)}
                                style={{ borderWidth: 1, width: 100, paddingBottom: 2, marginLeft: 65 }}
                                placeholder={"약 구성 1"}
                                value={medicineConsist} />


                        </View>

                    </View>
                    <Text style={{ fontSize: 20, marginLeft: 20, marginRight: 56 }}>복약 시간 </Text>
                    <View style={{ width: '80%', marginLeft: 20 }}>
                        <RNPickerSelect
                            onValueChange={(value) => setMedicineTime(value)}
                            placeholder={placeholder}
                            items={[
                                { label: '식전 30분', value: '식전 30분' },
                                { label: '식후 30분', value: '식후 30분' },
                                { label: '식전 1시간', value: '식전 1시간' },
                                { label: '식후 1시간', value: '식후 1시간' },
                            ]}
                        />
                    </View>
                    <Text style={{ fontSize: 20, marginLeft: 20 }}>복약 기간 </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, marginLeft: 10 }}>


                        <Button buttonStyle={{ marginLeft: 10, width: 80, height: 30 }} type='clear' titleStyle={{ color: 'black', fontSize: 15 }} onPress={showStartDatepicker} title="시작 날짜" />
                        <Button buttonStyle={{ marginLeft: 10, width: 80, height: 30 }} type='clear' titleStyle={{ color: 'black', fontSize: 15 }} onPress={showEndDatepicker} title="끝 날짜" />

                    </View>


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
                    <View style={{ marginLeft: 0 }}>
                        <Button buttonStyle={{ height: 30, backgroundColor: '#FF5A5F' }} title="저장" onPress={onSave} />
                    </View>
                </Card>
                <DatePicker
    style={ { width: 350, height: 45 } }
    customStyles = { {
        placeholderText:{ fontSize:20 }, // placeHolder style
        headerStyle : {  },			// title container style
        headerMarkTitle : { }, // title mark style 
        headerDateTitle: { }, // title Date style
        contentInput: {}, //content text container style
        contentText: {}, //after selected text Style
    } } // optional 
    centerAlign // optional text will align center or not
    allowFontScaling = {false} // optional
    placeholder={'Apr 27, 2018 → Jul 10, 2018'}
    mode={'range'}
/>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )

}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = {
    container: {
        marginTop: 30,
        marginLeft: 20
    }
}