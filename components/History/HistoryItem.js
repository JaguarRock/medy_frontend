import React from 'react'
import {View, Text, Button} from 'react-native'

const HistoryItem = ({item}) => {
    return(
        <View>
            <Text style = {{paddingBottom : 100}}>Histor Item</Text>
             {item}
        </View>
    )
}
export default HistoryItem;