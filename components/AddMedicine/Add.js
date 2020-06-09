import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import AddNewMedicine from './AddNewMedicine'
import { Divider } from 'react-native-elements'
const Add = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{
        color: 'black',
        fontSize: 45,
        marginTop: 70,
        marginLeft: 20,
        fontWeight: 'bold'
      }}>A D D</Text>
      <Text style={{
        color: 'black',
        fontSize: 45,
        marginLeft: 20,
        paddingBottom : -20,
        fontWeight: 'bold'
      }}>M E D I C I N E</Text>
      <AddNewMedicine navigation={navigation} />
      {/*<Divider style={{ marginTop : 40,borderWidth: 0.7, width: '85%', marginLeft: 30 }} />*/}
      {/*<Text style={{
        fontSize: 45,
        marginTop: 29,
        marginLeft: 20,
        fontWeight: 'bold'
      }}>QR코드로 간편하게 입력!</Text>
    <View style = {{alignItems :'center'}}><Image style={{width : 250, height:250, resizeMode : 'contain'}} source = {require('../../img/QR.png')}/></View>*/}
    </ScrollView>

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

export default Add;