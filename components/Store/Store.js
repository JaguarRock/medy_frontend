import React from 'react'
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native'
import StoreList from './StoreList'
import StoreRecommend from './StoreRecommend'
import {SearchBar} from 'react-native-elements'
function Store (){
    return(
        <ScrollView style={[styles.container]}>
            <Text style ={styles.title}>S T O R E</Text>
            <StoreRecommend />
            <View style = {styles.search}><SearchBar round containerStyle={{paddingTop : 20, backgroundColor: '#F2F2F2', width: '95%', borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
                    inputContainerStyle={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderBottomWidth: 1 }}
                    
                    placeholder='검색'
                /></View>
            <StoreList/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#F2F2F2',
    },
    title: {
        color: 'black',
        fontSize: 45,
        marginTop: 70,
        marginLeft: 20,
        marginRight: 200,
        paddingBottom: 7,
        fontWeight : 'bold'
        
    },
      search : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      }
  });
export default Store