import React, {Component} from 'react'
import {ListItem} from 'react-native-elements'
import {Text, View, StyleSheet} from 'react-native'
const store = [
    {
        name : '비타민 C',
        price : '10000W',   
        company : '광동제약',
        avatar_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'  
    },
    {
        name : '타이레놀',
        price : '10000W',  
        company : '으악',
        avatar_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' 
    }
    ,
    {
        name : '케토톱',
        price : '10000W',    
        company : '사망' ,  
        avatar_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    }
]

export default class StoreList extends React.Component {
    render(){

        return(
        <View>
        {
            store.map((item, i) => (
            <ListItem 
                containerStyle  = 
                {{borderColor : 'black', borderWidth : 1 , borderBottomWidth : 1, marginBottom : 10, flex : 1, width : 350, height : 100, marginLeft : 30 ,borderRadius : 7}}
                key={i}
                title={item.name}
                rightSubtitle = {item.price}
                rightSubtitleStyle = {{paddingTop : 45, color : 'black'}}
                titleStyle = {{textAlign : 'center'}}
                subtitle = {item.company}
                subtitleStyle = {{textAlign : 'center'}}
                leftAvatar = {{ source: { uri: 'http://www.pharmstock.co.kr/news/photo/201906/21373_30924_1412.png'}}}
                bottomDivider
                chevron
            />
    ))
  }
  {console.log(store.avatar_url)}
</View>
        )
    }
}