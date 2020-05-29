import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import HistoryList from './HistoryList'
import HistoryCalender from './HistoryCalender'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from "react-native-underline-tabbar"

const Page = () => (
    <View style={styles.container}>
      <HistoryList/>
    </View>
);

const Page2 = ({label}) => (
    <View style = {styles.container}>
        <HistoryCalender/>
    </View>
)

class HistoryPage extends Component {
  render() {
    return (
        <View style={[styles.container, {paddingTop: 20}, {flex:1}]}>
          <ScrollableTabView
              tabBarActiveTextColor="#FF5A5F"
              renderTabBar={() => <TabBar underlineColor="#FF5A5F" />}>
            <Page tabLabel={{label: "리스트"}} label = "리스트"/>
            <Page2 tabLabel={{label: "캘린더"}} label = "캘린더"/>
          </ScrollableTabView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 28,
    },
  });


export default HistoryPage;