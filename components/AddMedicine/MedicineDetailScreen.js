import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class MedicineDetail extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Button
                    title="Medicine List"
                    onPress={() => this.props.navigation.navigate('EditMedicineScreen')}/>
            </View>
        )
    }
}

export default MedicineDetail;

const styles = StyleSheet.create({
    wrapper: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})