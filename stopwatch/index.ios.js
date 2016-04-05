//javascript ES2015
// var React = require('react-native');
// var {
//   Text, View, AppRegistry
// } = React;

import React, { Text, View, AppRegistry, StyleSheet } from 'react-native';

var StopWatch = React.createClass({
  render() {
    return <View style={ styles.container }>
      <View style={ [styles.header, this.border('yellow')] }>
        <View>
          <Text style={ this.border('red') }>
            00:00.00
          </Text>
        </View>
        <View style={ this.border('green') }>
          { this.startStopButton() }
          { this.lapButton() }
        </View>
      </View>

      <View style={ [styles.footer, this.border('blue')] }>
        <Text>I am a list of laps</Text>
      </View>
    </View>
  },
  startStopButton() {
    return <View>
      <Text>Start</Text>
    </View>
  },
  lapButton() {
    return <View>
      <Text>Lap</Text>
    </View>
  },
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
