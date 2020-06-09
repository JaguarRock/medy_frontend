import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Avatar, Button } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
const store = [
    {
        name: '맹장염',
        day: '03-18',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        name: '타이레놀',
        day: '03-18',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    }
    ,
    {
        name: '케토톱',
        day: '03-18',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    }
]
function RecentMedicineList({ item, navigation }) {
    return (
        <ScrollView horizontal={true} style={{ scaleX: 1, paddingBottom: 20 }} showsHorizontalScrollIndicator={false}>
            <Card containerStyle={styles.cardstyle}>
                <View flexDirection='row'>
                    <TouchableOpacity style={styles.opacity}>
                        <Text style={{
                            color: 'black', fontSize: 21,
                            textAlign: 'center'
                        }}>골절</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 20 }}>세 시간 전</Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.cardstyle}>
                <View flexDirection='row'>
                    <TouchableOpacity style={styles.opacity}>
                        <Text style={{
                            color: 'black', fontSize: 21,
                            textAlign: 'center'
                        }}>만성 B..</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 20 }}>네 시간 전</Text>
                    </View>
                </View>
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
        width: 80,
        height: 40,
        borderRadius: 50,
    },

    time: {
        paddingTop: 30,
        paddingBottom: 30,
        marginLeft: 10
    },
    cardstyle: {
        width: 210,
        borderRadius: 7,
        //borderColor: '#FBFBFB',
        height: 60,
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        justifyContent: 'center',
    }
}
)


export default RecentMedicineList