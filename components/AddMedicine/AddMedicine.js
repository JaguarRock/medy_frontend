import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddNewMedicine from './AddNewMedicine';

export default function AddMedicine(props) {
    console.log(props);
    return (
        <View style={styles.wrapper}>
            <View style={styles.tabName}>
                <Text style={styles.title}>
                    ADD MEDICINE
                </Text>
            </View>
            <View>
                <AddNewMedicine navigation={props}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    tabName: {
        marginTop: 80,
        marginLeft: 20,
        height: '8%',
        flexDirection: 'row',
    },
    title: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#445544'
    }
})