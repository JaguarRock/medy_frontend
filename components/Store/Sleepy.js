import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
function Sleepy() {
    return (
        <ScrollView horizontal={true} style={{ scaleX: 1 }} showsHorizontalScrollIndicator={false}>
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
                    <Text style={{ color: 'black', fontSize: 35 }}>비타민 C</Text>
                </TouchableOpacity>
                <Image style={{ marginLeft: 10, marginTop: 23, width: 120, height: 120 }} source={require('../../img/vitaminC.jpg')} />
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
                    <Text style={{ color: 'black', fontSize: 35 }}>오메가 3</Text>
                </TouchableOpacity>
                <Image style={{ marginLeft: 10, marginTop: 23, width: 120, height: 120 }} source={require('../../img/omega.jpg')} />
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
                    <Text style={{ color: 'black', fontSize: 35 }}>비타민</Text>
                </TouchableOpacity>
                <Text style={{ paddingTop: 180, fontSize: 30 }}>10000W</Text>
            </Card>
        </ScrollView>
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

export default Sleepy