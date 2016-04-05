//javascript ES2015
// var React = require('react-native');
// var {
//   Text, View, AppRegistry
// } = React;

import React, { Text, View, AppRegistry, StyleSheet } from 'react-native';

var StopWatch = React.createClass({
  render() {
    return <View style= { styles.container }>
      <View>
        <View>
          <Text>
            00:00.00
          </Text>
        </View>
        <View>
          { this.startStopButton() }
          { this.lapButton() }
        </View>
      </View>

      <View>
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
