import React, { useState, useReducer, useEffect, Component } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { initialState, reducer } from '../../store/reducers/openMedicineReducer';
import axios from 'axios';
import { render } from 'react-dom';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const API_URL = "http://192.168.0.69:5000/open/";

export default class SearchMedicineBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
        };

        this.arrayholder = [];
    }


    componentDidMount() {
        return fetch(API_URL)
            .then(API_URL)
            .then(response => response.json())
            .then(resJson => {
                this.setState(
                    { 
                        loading: false, 
                        data: resJson 
                    },
                    function() {
                        this.arrayholder = resJson;
                    }
                );
            })
            .catch(error => {
                console.error(error);
            })
    }

    renderSeparator = () => {
        return (
            <View
            // style={{
            //     height: 1,
            //     width: '86%',
            //     backgroundColor: '#CED0CE',
            //     marginLeft: '14%',
            // }}
            />
        );
    };

    searchFilterFunction(text) {
        const newData = this.arrayholder.filter(function(item) {
            const itemData = item.ITEM_NAME;
            const textData = text;
            return itemData.indexOf(text) > -1;
        });
        this.setState({
            data: newData,
            text: text,
        });
        console.log(this.state.data);
    };

    ListViewItemSeparator = () => {
        return (
            <View/>
        )
    }



    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View>
                <TextInput
                onChangeText={text => this.searchFilterFunction(text)}
                value={this.state.text}
                placeholder="Search"/>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <ListItem
                            title={`${item.ITEM_NAME}`}
                        />
                        </TouchableOpacity>
                        
                    )}
                    keyExtractor={item => item.ITEM_NAME}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F2F2F2',
        width: '95%',
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputStyle: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderBottomWidth: 1
    }
})