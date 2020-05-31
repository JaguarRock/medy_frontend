import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Card } from 'react-native-elements'
function MedicineList({ item, index, navigation, onDelete, onEdit }) {
    const inputEl = useRef(null);
    const RightActions = ({ progress, dragX, onPress, item }) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <View>
                <RectButton onPress={() => {
                    inputEl.current.close();
                    onEdit(item);
                }}>
                    <Animated.View>
                        <Animated.Text>
                            더보기
                        </Animated.Text>
                    </Animated.View>
                </RectButton>
                <RectButton onPress={() => {
                    inputEl.current.close();
                    onDelete(item._id)
                }}>
                    <Animated.View>
                        <Animated.Text>
                            Delete
                        </Animated.Text>
                    </Animated.View>
                </RectButton>
            </View>
        );
    };

    return (
        <View>
            <Swipeable ref={inputEl} renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} item={item} />
            )}>
                <View style={{ flex: 1 }}>
                    <Card title={item.bagName}><Text style={{ textAlign: 'center' }}>{item.bagConsist}</Text></Card>
                </View>
            </Swipeable>
        </View>
    )
};

export default MedicineList;