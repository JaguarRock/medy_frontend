import * as React from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';
import Tired from './Tired'
import Sleepy from './Sleepy'
import NoEye from './NoEye'
import Recommend from './Recommend'

const FirstRoute = () => (
  <View style={[styles.container]}><Recommend/></View>
);
const SecondRoute = () => (
  <View style={[styles.container]}><Tired/></View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}><NoEye/></View>
);
const FourthRoute = () => (
  <View style={[styles.container]}><Sleepy/></View>
);

export default class StoreRecommend extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '추천해줘' },
      { key: 'second', title: '졸려' },
      { key: 'third', title: '눈 침침해' },
      { key: 'fourth', title: '피곤해' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third : ThirdRoute,
    fourth : FourthRoute
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        swipeEnabled = {false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  tabBar: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title :{
    color : 'black',
    fontSize : 30,
    marginTop : 70,
    marginLeft : 20,
    paddingBottom : 20,
    marginBottom : 300
  },
});
