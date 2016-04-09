import React, { View, Text, StyleSheet, Component } from 'react-native';

import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';

class Main extends Component {
  componentWillMount() {
    Parse.initialize('myAppId','unused');
    Parse.serverURL = 'https://amqo-react-authentication.herokuapp.com/parse';
  }
  render() {
    return (
      <View style={ styles.container }>
        <Signin />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Main;
