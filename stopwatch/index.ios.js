//javascript ES2015
// var React = require('react-native');
// var {
//   Text, View, AppRegistry
// } = React;

import React, { Text, View, TouchableHighlight, AppRegistry, StyleSheet } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

var StopWatch = React.createClass({
  getInitialState() {
    return {
      timeElapsed: null
    }
  },
  render() {
    return <View style={ styles.container }>
      <View style={ [styles.header, this.border('yellow')] }>
        <View style= { [styles.timerWrapper, this.border('red')] }>
          <Text>
            { formatTime(this.state.timeElapsed) }
          </Text>
        </View>
        <View style={ [styles.buttonWrapper, this.border('green')] }>
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
    return <TouchableHighlight
      underlayColor="gray"
      onPress={ this.handleStartPress }>
      <Text>Start</Text>
    </TouchableHighlight>
  },
  lapButton() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={ this.handleLapPressed } >
      <Text>Lap</Text>
    </TouchableHighlight>
  },
  handleStartPress() {
    var startTime = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },
  handleLapPressed() {

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
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
