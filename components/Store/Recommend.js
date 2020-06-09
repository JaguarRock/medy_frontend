import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, Linking } from 'react-native'
import { Card } from 'react-native-elements'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

function Recommend() {
    return (
        <View>
            <Text style = {{fontWeight :'bold', marginLeft : 30, fontSize : 30}}>이런 영양제는 어떠세요?</Text>
        <ScrollView horizontal={true} style={{ scaleX: 1 }} showsHorizontalScrollIndicator={false}>
            
            <Card containerStyle={{
                width: 180, height : 287, borderRadius: 7, shadowColor: "#000", borderWidth : 0,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 35 }}>비타민 B</Text>
                </TouchableOpacity>
                <Image style={{ marginLeft: 10, marginTop: 23, width: 120, height: 120 }} source={require('../../img/vitaminB.jpg')} />
                <View alignItems='center' flexDirection="row">
                    <Text style={{ paddingTop: 27, fontSize: 27, paddingRight: 18 }}>10000원</Text>
                    <View>
                        <Text style={{ marginTop : 20, fontSize : 20, color : 'blue'}}>구매</Text>
                        <View style = {{marginLeft : 10}}><MaterialCommunityIcons size = {24} name="arrow-top-right" /></View>
                    </View>
                </View>
            </Card>
            <Card containerStyle={{
                width: 180, height: 287, borderRadius: 7, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 35 }}>루테인</Text>
                </TouchableOpacity>
                <Image style={{ marginLeft: 10, marginTop: 23, width: 120, height: 120 }} source={require('../../img/lutein.jpg')} />
                <View alignItems='center' flexDirection="row">
                    <Text style={{ paddingTop: 27, fontSize: 27, paddingRight: 18 }}>10000원</Text>
                    <View>
                        <Text style={{ marginTop : 20, fontSize : 20, color : 'blue'}}>구매</Text>
                        <View style = {{marginLeft : 10}}><MaterialCommunityIcons onPress = {() => Linking.openURL('https://kr.iherb.com/pr/21st-Century-Lutein-20-mg-60-Softgels/8842?gclid=Cj0KCQjwoPL2BRDxARIsAEMm9y8QojZcaFNabu6Er1Ql4t-E1dw1_Xeus81kyg0iAvgDnVzTNPDpTLYaAgdkEALw_wcB&gclsrc=aw.ds')} size = {24} name="arrow-top-right" /></View>
                    </View>
                </View>
            </Card>
            <Card containerStyle={{
                width: 180, height: 287, borderRadius: 7, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
               <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 32 }}>글루타치온</Text>
                </TouchableOpacity>
                <Image style={{ marginLeft: 10, marginTop: 23, width: 120, height: 120 }} source={require('../../img/glu.jpg')} />
                <View alignItems='center' flexDirection="row" style = {{marginTop : 2}}>
                    <Text style={{ paddingTop: 27, fontSize: 27, paddingRight: 18 }}>10000원</Text>
                    <View>
                        <Text style={{ marginTop : 20, fontSize : 20, color : 'blue'}}>구매</Text>
                        <View style = {{marginLeft : 10}}><MaterialCommunityIcons onPress = {() => Linking.openURL('https://kr.iherb.com/pr/21st-Century-Lutein-20-mg-60-Softgels/8842?gclid=Cj0KCQjwoPL2BRDxARIsAEMm9y8QojZcaFNabu6Er1Ql4t-E1dw1_Xeus81kyg0iAvgDnVzTNPDpTLYaAgdkEALw_wcB&gclsrc=aw.ds')} size = {24} name="arrow-top-right" /></View>
                    </View>
                </View>
                <Text style={{ paddingTop: 180, fontSize: 30 }}>10000W</Text>
            </Card>
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100, height: 100, borderRadius: 50
    },
    opacity: {
        borderColor: '#C5C5C5',
        backgroundColor: '#C5C5C5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    time: {
        paddingTop: 30
    }
}
)

export default Recommend