import React, {useRef} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable';

function MedicineList ({item, index, navigation, onDelete, onEdit}) {
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
                    <View>
                        <Animated.Text>
                            Edit
                        </Animated.Text>
                    </View>
                </RectButton>
                <RectButton onPress={() => {
                    inputEl.current.close();
                    onDelete(item.id)
                }}>
                    <View>
                        <Animated.Text>
                            Delete
                        </Animated.Text>
                    </View>
                </RectButton>
            </View>
        );
    };

    return (
        <Swipeable ref={inputEl} renderRightActions={(progress, dragX) => (
            <RightActions progress={progress} dragX={dragX} item={item} />
        )}>
            {console.log(item)}
            <View>
                <View>
                    <Text>
                        {item.bagName}
                    </Text>
                    <Text>
                        {item.bagConsist}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
};

export default MedicineList;