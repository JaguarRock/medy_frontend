import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedicineBag, getMedicineBags } from "../../store/actions/medicineBag";
import MedicineList from "./MedicineList";
import axios from "axios";
import SearchInput, { createFilter } from 'react-native-search-filter';

export default function HistoryList({ navigation }) {

    const [searchhistory, setSearchhistory] = useState('');
    const onChangeSearch = searchhistory => {
        setSearchhistory(searchhistory)
    }
    {/*const filtered = Object.keys(medicineBags)
        .filter(bagName => allowed.includes(bagName))
        .reduce((obj, key) => {
            obj[key] = medicineBags[key];
            return obj
        }, {})*/}


    const dispatch = useDispatch();
    // 변수 선언
    const [isFetching, setIsFetching] = useState(false);
    // Redux Store State 접근
    const dataReducer = useSelector((state) => state.dataReducer);
    const { medicineBags } = dataReducer;
    const filteredData = medicineBags.filter(function (item) {
        return item.bagName === searchhistory
    }).map(function ({ __v, _id, bagName, bagConsist, bagStartDate, bagEndDate }) {
        return { __v, _id, bagName, bagConsist, bagStartDate, bagEndDate } 
    })


    const [filtereddata, setFilteredData] = useState('');
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
            .then((data) => { dispatch(getMedicineBags(data)) })
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false));
    };


    const renderItem = ({ item, index }) => {
        return (
            <MedicineList item={item} index={index} navigation={navigation} onDelete={onDelete} onEdit={onEdit} />
        )
    };

    // 약 봉투 수정
    const onEdit = (item) => {
        navigation.navigate('HistoryItem', { bagName: item.bagName, bagConsist: item.bagConsist,bagTime : item.bagTime, bagConsistTwo: item.bagConsistTwo,bagConsistThree: item.bagConsistThree, bagStartDate: item.bagStartDate, bagEndDate: item.bagEndDate })
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
            <View>
                <SearchBar round containerStyle={{ backgroundColor: '#F2F2F2',width: '95%', borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
                    inputContainerStyle={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderBottomWidth: 1 }}
                    value={searchhistory}
                    onChangeText={onChangeSearch}
                    placeholder='검색'
                />
            </View>
            <FlatList
                data={searchhistory ? filteredData : medicineBags}
                renderItem={renderItem}
                keyExtractor={(item, index) => `filteredData_${index}`} />
            {/*<TouchableHighlight onPress={() => navigation.navigate('AddNewMedicine', { title: "Add New Medicine" })}>
                <Text>+</Text>
               </TouchableHighlight>*/}
        </SafeAreaView>
    )

}