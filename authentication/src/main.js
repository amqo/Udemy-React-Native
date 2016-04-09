import React, { View, Text, StyleSheet, Component } from 'react-native';

import Signin from './components/authentication/signin';

class Main extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>I am on both iOS and Android.</Text>
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
