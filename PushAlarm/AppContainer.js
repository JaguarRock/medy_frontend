/*import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions'
import { TextInput } from 'react-native-gesture-handler';
*/
/*
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
console.log(Notifications)
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      notification: null,
      title: 'Hello World',
      body: 'Say something!',
    };
  }

  async registerForPushNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        return;
      }
    }

    const token = await Notifications.getExpoPushTokenAsync();
    this.subscription = Notifications.addListener(this.handleNotification);
    this.setState({
      token,
    });
  }

  sendPushNotification(token = this.state.token, title = this.state.title, body = this.state.body) {
    return fetch('https://exp.host/--/api/v2/push/send', {
      body: JSON.stringify({
        to: token,
        title: title,
        body: body,
        data: { message: `${title} - ${body}` },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }

  handleNotification = notification => {
    this.setState({
      notification,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <Text style={styles.title}>Expo Sample Notifications App</Text>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={title => this.setState({ title })}
          maxLength={100}
          value={this.state.title}
        />
        <Text style={styles.text}>Message</Text>
        <TextInput
          style={styles.input}
          onChangeText={body => this.setState({ body })}
          maxLength={100}
          value={this.state.body}
        />
        <TouchableOpacity
          onPress={() => this.registerForPushNotifications()}
          style={styles.touchable}>
          <Text>Register me for notifications!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.sendPushNotification()} style={styles.touchable}>
          <Text>Send me a notification!</Text>
        </TouchableOpacity>
        {this.state.token ? (
          <View>
            <Text style={styles.text}>Token</Text>
            <TextInput
              style={styles.input}
              onChangeText={token => this.setState({ token })}
              value={this.state.token}
            />
          </View>
        ) : null}
        {this.state.notification ? (
          <View>
            <Text style={styles.text}>Last Notification:</Text>
            <Text style={styles.text}>{JSON.stringify(this.state.notification.data.message)}</Text>
          </View>
        ) : null}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
  },
  text: {
    paddingBottom: 2,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    width: '95%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    width: '95%',
  },
});
*/
import React from 'react';
import { Text, View, Button, Vibration, Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class AppContainer extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token;
      try {
        token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
      } catch (e) {
        console.log(e);
      }

      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${JSON.stringify(data)}`);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        </View>
        <Button
          title={'Press to Send Notification'}
          onPress={() => this.sendPushNotification()}
        />
      </View>
    );
  }
}


//var { ivalue } = "";
/*
async function register() {
  const {status} = await Permissions.askAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    alert("you need to enable permissions in settings");

    return;
  }
  //console.log(Notifications)
  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
}

export default class AppContainer extends Component {
  componentWillMount() {
    register();
    this.listener = Notifications.addListener(this.listen);
  }
  componentWillUnmount() {
    //this.listener && Notifications.removeListener(this.listen);
  }

  listen = ({origin, data}) => {
    console.log ("cool data", origin, data);
  }

  render() {
    return (
      <View>
        <Text>
            ddd
        </Text>
      </View>
    )
  }
}*/

/*
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Notifications} from 'expo';
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { TextInput } from 'react-native-gesture-handler';

//var { ivalue } = "";

async function getToken() {
  //원격지 알람은 기기에서만 된다.
  if (!Constants.isDevice) {
    return;
  }

  let { status } = await Permissions.askAsync(
    Permissions.NOTIFICATIONS
  );

  if (status != 'granted') {
    console.log("설정에서 알람 활성화 필요");
    return;
  }

  //push 이후에 반환받은 값 담기
  let value = await Notifications.getExpoPushTokenAsync();
  console.log('토큰값 ', value);
  alert(value);
}

export default class AppContainer extends React.Component {

  state = {
    tokenValue: ""
  };

  componentDidMount() {
    getToken();

    this.listener = Notifications.addListener(this.handleNotification);
  }

  componentWillUnmount() {
    this.listener && this.listener.remove();
  }

  handleNotification = ({ origin, data }) => {
    console.log(
      `push notificaton ${origin} with data : ${JSON.stringify(data)}`
    );
  };


  render() {

    const { tokenValue } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>notification test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
*/