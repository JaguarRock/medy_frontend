import React, {useState, useEffect, useMemo} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Avatar, Button } from 'react-native-elements'
import Count from './Count'
import moment from 'moment'

function Time (){
    
    const [currenttime, setCurrentTime] = useState(null);
    useEffect(()=> {setInterval(()=>{
        setCurrentTime(moment().format());
    }, 1000)})
    console.log(currenttime)
}

function TodayMedicineList({ item }) {
    return (
        <ScrollView horizontal={true} style={{ scaleX: 1, paddingBottom: 20, }} showsHorizontalScrollIndicator={false}>
            <Card containerStyle={styles.cardstyle}>
                <TouchableOpacity style={styles.opacity}>
                    <Text style={{
                        color: 'black', fontSize: 35,
                        textAlign: 'center'
                    }}>{item.bagName}</Text>
                </TouchableOpacity>
                {/*<Text style={styles.time}>{item.bagConsist} </Text>*/}
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}></Text>
                {/*<Button title="더보기" onPress={() => { navigation.navigate('HistoryItem', { bagName: item.bagName, bagConsist: item.bagConsist, bagStartDate : item.bagStartDate, bagEndDate : item.bagEndDate }) }} />*/}
                <Text>남은 시간</Text>
                {/*{time.slice(11,16) === dinner?
                    <Count /> : <Text>none</Text>}
                <Text>{time}</Text>*/}  
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#FF5A5F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100, height: 100, borderRadius: 50
    },
    opacity: {
        borderColor: '#FF5A5F',
        backgroundColor: '#FF5A5F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 45,
    },

    time: {
        paddingTop: 30,
        marginLeft: 10
    },
    cardstyle: {
        width: 160,
        borderRadius: 7,
        //borderColor: '#FBFBFB',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 250,
        marginBottom: 9
    }
}
)


export default TodayMedicineList