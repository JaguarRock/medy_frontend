import React, {useRef} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable';

function UserList ({item, onDelete, onEdit}) {
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
                    onDelete(item._id)
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
            <View>
                <View>
                    <Text>
                        {item.user_id}
                    </Text>
                    <Text>
                        {item.user_email}
                    </Text>
                    <Text>
                        {item.user_password}
                    </Text>
                    <Text>
                        {item.user_name}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
};

export default UserList;