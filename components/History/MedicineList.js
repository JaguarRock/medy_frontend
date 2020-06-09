import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Card } from 'react-native-elements'

function MedicineList({ search, item, route, onDelete, onEdit }) {

    {/*useEffect(()=>{
        return(
            searchitem = ''
        )
    },[])
const searchitem = route.params.searchitem*/}
    const [searchhistory, setSearchHistory] = useState('');
    const inputEl = useRef(null);
    const RightActions = ({ progress, dragX, onPress, item }) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <View>
                <View>
                    <RectButton onPress={() => {
                        inputEl.current.close();
                        onEdit(item);
                    }}>
                        <Animated.View>
                            <Text style = {{marginTop : 35}}>
                                더보기
                        </Text>
                        </Animated.View>
                    </RectButton>
                    <RectButton onPress={() => {
                        inputEl.current.close();
                        onDelete(item._id)
                    }}>
                        <Animated.View>
                            <Text style = {{color : 'red'}}>
                                삭제
                        </Text>
                        </Animated.View>
                    </RectButton>
                </View>
            </View>
        );
    };
    return (
        <View>
            
            <Swipeable ref={inputEl} renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} item={item} />
            )}>
                
                <View style={{ flex: 1 }}>
                    <Card containerStyle={{
                        borderRadius: 7, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 3.2, marginBottom: 7, marginTop: 3
                    }}titleStyle = {{fontSize : 22}} title={item.bagName}><View flexDirection = 'row'><Text style={{  marginLeft : 155, fontSize : 17 }}>{item.bagConsist}</Text></View></Card>
                </View>
            </Swipeable>
        </View>
 
    )
};

export default MedicineList;