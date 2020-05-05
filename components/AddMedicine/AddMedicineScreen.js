import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

class AddMedicine extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            consist: '',
        };
    }

    addSubmitHandler = () => {
        console.log("Submitted");
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    placeholder="약의 이름을 입력하세요"></TextInput>
                <TextInput
                    placeholder="약의 구성을 입력하세요"></TextInput>
                <Button
                    title="Add"
                    onPress={() => this.props.navigation.navigate('MedicineScreen')} />
                <Button
                    title="Go to Medicine List"
                    onPress={() => this.props.navigation.navigate('MedicineScreen')} />

            </View>
        )
    }
}

export default AddMedicine;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})