import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements'
import { useSelector } from 'react-redux';
// import { RootState } from '../modules'


export default class MyPageTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "김혜정",
            age: "25",
            gender: "여",
            isSick: "Y",
            isSmoke: "N",
            isDrink: "N"
        }

    }

    render() {
        return (
            <View>
                <View>
                    <Text> MY PAGE</Text>
                    <View style={styles.userImage}>
                        <Avatar
                            rounded
                            source={{ uri: 'https://dimg.donga.com/wps/NEWS/IMAGE/2019/12/22/98915688.2.jpg' }}
                            size='large'
                        ></Avatar>
                    </View>
                </View>

                <View>
                    <ListItem
                        title="name"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.name}
                    </ListItem>

                    <ListItem
                        title="age"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.age}
                    </ListItem>

                    <ListItem
                        title="gender"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.gender}
                    </ListItem>

                    <ListItem
                        title="isSick"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.isSick}
                    </ListItem>

                    <ListItem
                        title="isSmoke"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.isSmoke}
                    </ListItem>

                    <ListItem
                        title="isDrink"
                        //  rightTitle = 'name'
                        containerStyle={styles.listItemContainer}
                    > {this.state.isDrink}
                    </ListItem>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    userImage: {
        marginRight: 10,
    },
    listItemContainer: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
    }
})