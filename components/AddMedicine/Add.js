import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddNewMedicine from './AddNewMedicine'
import AddNavigator from './AddNavigator'
const Add = ({navigation}) => {
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>A D D</Text>
            <AddNewMedicine navigation = {navigation}/>
      {console.log(navigation)}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#FAFAFA'
    },
    title :{
      color : 'black',
      fontSize : 30,
      marginTop : 70,
      marginLeft : 20,
      marginRight : 200,
      paddingBottom : 20,
      backgroundColor : '#FF5A5F',
      
    },
    subtitle : {
        fontSize : 20,
        paddingTop : 25,
        marginLeft : 20,
        paddingBottom : 3
    },
    search : {
        justifyContent : 'center',
        alignItems : 'center'
    }
  });

export default Add;