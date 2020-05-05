import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class MedicineScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Button
                    title="Medicine List"
                    onPress={() => this.props.navigation.navigate('MedicineDetailScreen')}/>
            </View>
        );
    }
}

export default MedicineScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})