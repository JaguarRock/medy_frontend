import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, Avatar, Divider } from 'react-native-elements'
import { List } from 'react-native-paper'
import {Button} from 'react-native-elements'
const HistoryItem = ({ navigation, route }) => {
    return (
        <View>
            {/*<Text style={{color: 'black',
    fontSize: 45,
    marginTop: 70,
    marginLeft: 20,
    marginRight: 100,
    marginBottom: -10,
    fontWeight : 'bold'}}>H I S T O R Y D E T A I L</Text>*/}
            <Card containerStyle={{
                marginTop: '15%', height: '88%', borderRadius: 7, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 3.2
            }}>
                <List.Section>
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity style={{
                            borderColor: '#FF5A5F',
                            backgroundColor: '#FF5A5F',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            marginBottom : 20
                        }}>
                            <Text style={{ color: 'black', fontSize: 35 }}>{route.params.bagName}</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider />
                    <List.Item
                        title="약 봉투 이름"
                        right={() => <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{route.params.bagName}</Text>} />
                    <Divider />
                    <List.Item
                        title="약 봉투 내용"/>
                        <List.Item
                        title="약 상세 1"
                        style = {{marginTop : -10}}
                        right={() => <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{route.params.bagConsist}</Text>} />
                    <Divider/>
                    <List.Item
                        title="복약 시간"
                        right={() => <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{route.params.bagTime}</Text>} />
                        <Divider />
                    <List.Item
                        title="시작 날짜"
                        right={() => <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{route.params.bagStartDate.slice(0, 10)}</Text>} />
                    <Divider />
                    <List.Item
                        title="끝 날짜"
                        right={() => <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{route.params.bagEndDate.slice(0, 10)}</Text>} />
                    <Divider />
                    <Button type = 'clear' icon title="뒤로" onPress={() => { navigation.goBack() }} />
                </List.Section>
            </Card>
        </View>
    )
}
export default HistoryItem;