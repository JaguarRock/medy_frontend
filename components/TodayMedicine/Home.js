import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import { Divider, Card, Avatar } from 'react-native-elements'
import TodayMedicine from './TodayMedicine'
import RecentMedicineList from './RecentMedicineList'
import moment from 'moment'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>H O M E</Text>
            <Text style={styles.subtitle}>오늘의 약봉투</Text>
            <Divider style={{ backgroundColor: '#FF5A5F', width: '43%', marginLeft: 20, borderWidth: 1, borderColor: '#FF5A5F' }} />
            <TodayMedicine navigation={navigation} />
            <Text style={{
                fontSize: 20,
                paddingTop: 3,
                marginLeft: 20,
                paddingBottom: 3
            }}>최근 먹은 약</Text>
            <Divider style={{ backgroundColor: '#FF5A5F', width: '43%', marginLeft: 20, borderWidth: 1, borderColor: '#FF5A5F', marginBottom: 10 }} />
            {/*<RecentMedicineList navigation={navigation} />*/}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    title: {
        color: 'black',
        fontSize: 45,
        marginTop: 70,
        marginLeft: 20,
        marginRight: 200,
        paddingBottom: 7,
        fontWeight: 'bold'

    },
    subtitle: {
        fontSize: 20,
        paddingTop: 25,
        marginLeft: 20,
        paddingBottom: 3
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});