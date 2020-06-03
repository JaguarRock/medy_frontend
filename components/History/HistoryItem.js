import React from 'react'
import {View, Text, Button} from 'react-native'

const HistoryItem = ({navigation, route}) => {
    return(
        <View>
            <Text style = {{paddingBottom : 100}}>Histor Item</Text>
            <Text>약 봉투 이름 : {route.params.bagName}</Text>
            <Text>약 상세 : {route.params.bagConsist}</Text>
            <Text>시작날짜 : {route.params.bagStartDate}</Text>
            <Text>끝날짜 : {route.params.bagEndDate}</Text>
             <Button title = "뒤로" onPress = {() => {navigation.goBack()}}/>
        </View>
    )
}
export default HistoryItem;