import React from 'react'
import {View, Text, ScrollView , StyleSheet, TouchableOpacity} from 'react-native'
import {Card, Avatar, Button} from 'react-native-elements'

function TodayMedicine({item}){
    return(
        <ScrollView horizontal={true} style={{scaleX:1 , paddingBottom : 20}}showsHorizontalScrollIndicator={false}>
        <Card containerStyle = {styles.cardstyle}>
            <TouchableOpacity style={styles.opacity}>
                <Text style = {{color : 'black', fontSize : 35}}>{item.bagName}</Text>
            </TouchableOpacity>
            <Text style = {styles.time}>{item.bagConsist} </Text>
            <Text style = {{paddingTop : 10, fontSize : 30}}>01 : 18 : 39 </Text>
        </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card : {
        borderColor:'#FF5A5F',
        alignItems : 'center',
        justifyContent : 'center',
    },
    button : {
        width : 100, height : 100, borderRadius : 50
    },
    opacity : {
        borderColor:'#FF5A5F',
        backgroundColor : '#C5C5C5',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:50,
    },

    time : {
        paddingTop : 30
    },
    cardstyle : {
        width : 180, 
        borderRadius : 7, 
        borderColor : '#000000',
    }
}
)


export default TodayMedicine