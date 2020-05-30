import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import HistoryPage from './HistoryPage'

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>H I S T O R Y</Text>
      <HistoryPage navigation = {navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginTop: 70,
    marginLeft: 20,
    marginRight: 150,
    paddingBottom: 20,
    backgroundColor: /*'#FFE1E4'*/ '#FF5A5F'
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

export default History