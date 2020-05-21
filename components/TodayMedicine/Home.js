import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

export default function Home() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.tabName}>
                <Text style={styles.title}>
                    H o m e
                </Text>
            </View>
            <View>
                <SearchBar placeholder="약을 검색하세요." inputContainerStyle={{backgroundColor: 'white'}}
                    containerStyle={styles.searchBar}
                    placeholderTextColor={'#919191'}
                    platform="android"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    tabName: {
        marginTop: 80,
        marginLeft: 20,
        height: '8%',
        flexDirection: 'row',
    },
    title: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: '500',
        lineHeight: 24,
        fontStyle: 'normal',
        color: '#445544'
    },
    searchBar: {
        borderRadius: 25,
        borderColor: 'black',
    }
})