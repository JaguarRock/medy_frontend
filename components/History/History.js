import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import HistoryPage from './HistoryPage'

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>H I S T O R Y</Text>
      {/*<Search navigation = {navigation}/>*/}
      <HistoryPage navigation = {navigation} />
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
    marginRight: 100,
    fontWeight : 'bold'
},
  subtitle: {
    fontSize: 20,
    paddingTop: 25,
    marginLeft: 20,
    paddingBottom: 8
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default History