import React, { useEffect, useState } from 'react';
import {
    FlatList, SafeAreaView, ScrollView, Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HistoryItem from './HistoryItem'
import { deleteMedicineBag, getMedicineBags } from "../../store/actions/medicineBag";
import MedicineList from "./MedicineList";
import axios from "axios";
import { ListItem } from 'react-native-elements'
export default function HistoryList({navigation}) {
    const dispatch = useDispatch();
    // 변수 선언
    const [isFetching, setIsFetching] = useState(false);
    // Redux Store State 접근
    const dataReducer = useSelector((state) => state.dataReducer);
    const { medicineBags } = dataReducer;

    useEffect(() => getData(), []);
    // Flatlist Data 불러오기
    const getData = () => {
        setIsFetching(true);

        // AsyncStorage.getItem('medicineBags', (err, medicineBags) => {
        //     if (err) alert(err.message);
        //     else if (medicineBags != null) dispatch(getMedicineBags(JSON.parse(medicineBags)));
        //     setIsFetching(false);
        // });

        let url = "http://192.168.43.194:5001/medicineBag"
        axios.get(url)
            .then(res => res.data)
            .then((data) => dispatch(getMedicineBags(data)))
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false));
    };


    const renderItem = ({ item, index }) => {
        return (
            <MedicineList item={item} index={index} navigation={navigation} onDelete={onDelete} onEdit={onEdit}/>
        )
    };

    // 약 봉투 수정
    const onEdit = (item) => {
            navigation.navigate('HistoryItem', {bagName : item.bagName, bagConsist : item.bagConsist})
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
        let url = "http://192.168.43.194:5001/medicineBag/";
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
                    keyExtractor={(item, index) => `medicineBags_${index}`} />
                {/*<TouchableHighlight onPress={() => navigation.navigate('AddNewMedicine', { title: "Add New Medicine" })}>
                <Text>+</Text>
               </TouchableHighlight>*/}
        </SafeAreaView>
    )

}