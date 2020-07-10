import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableHighlight, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedicineBag, getMedicineBags } from "../../store/actions/medicineBag";
import TodayMedicineList from "./TodayMedicineList"
import axios from "axios";
import moment from 'moment'
export default function TodayMedicine({ navigation }) {
    const dispatch = useDispatch();
    // 변수 선언
    const [isFetching, setIsFetching] = useState(false);
    // Redux Store State 접근
    const dataReducer = useSelector((state) => state.dataReducer);
    const { medicineBags } = dataReducer;
    const [time, setTime] = useState('');
    useEffect(()=> {
        const timer = setInterval(()=>{
            setTime(moment().format());
        }, 1000)
    return () => clearInterval(timer)}
    , [time])
    const dinner = "13:00"
    useEffect(() => getData(), []);
    // Flatlist Data 불러오기
    const getData = () => {
        setIsFetching(true);
        // AsyncStorage.getItem('medicineBags', (err, medicineBags) => {
        //     if (err) alert(err.message);
        //     else if (medicineBags != null) dispatch(getMedicineBags(JSON.parse(medicineBags)));
        //     setIsFetching(false);
        // });
        let url = "http://172.16.101.152:5001/medicineBag"
        axios.get(url)
            .then(res => res.data)
            .then((data) => dispatch(getMedicineBags(data)))
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false))
    }

    const renderItem = ({ item, index }) => {
        return (
            <TodayMedicineList item={item} index={index} navigation={navigation} onDelete={onDelete} onEdit={onEdit} />
        );
    };

    // 약 봉투 수정
    const onEdit = (item) => {
        navigation.navigate('AddNewMedicine', { medicineBag: item, title: "Edit MedicineBag" })
    };

    // 약 봉투 삭제
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
        let url = "http://172.16.101.152:5001/medicineBag/";
        axios.delete(url + _id) 
            .then((res) => dispatch(deleteMedicineBag(_id)))
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false));
    }

    return (
        <SafeAreaView>
            <FlatList
                data={medicineBags}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `medicineBags_${index}`}
                inverted={true}
            />
        </SafeAreaView>
    )

}