import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MedicineDetails = ({ medicine }) => {
    return (
        <View>
            <Text>{medicine.ITEM_NAME}</Text>
            <Text>{medicine.CHART}</Text>
        </View>
    )
}

export default MedicineDetails;