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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render() {
    return <View style={ styles.container }>
      <View style={ [styles.header, this.border('yellow')] }>
        <View style= { [styles.timerWrapper, this.border('red')] }>
          <Text style={ styles.timer }>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={ [styles.buttonWrapper, this.border('green')] }>
          { this.startStopButton() }
          { this.lapButton() }
        </View>
      </View>

      <View style={ [styles.footer, this.border('blue')] }>
        { this.laps() }
      </View>
    </View>
  },
  laps() {
    return this.state.laps.map((time, index) => {
        return (
          <View key={ index } style={ styles.lap }>
            <Text style={ styles.lapText }>Lap #{ index + 1 }</Text>
            <Text style={ styles.lapText }>{ formatTime(time) }</Text>
          </View>
        );
      });
  },
  startStopButton() {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="gray"
      onPress={ this.handleStartPress }
      style={ [styles.button, style] }>
      <Text>
        { this.state.running ? 'Stop' : 'Start' }
      </Text>
    </TouchableHighlight>
  },
  lapButton() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={ this.handleLapPress }
      style={ styles.button }>
      <Text>Lap</Text>
    </TouchableHighlight>
  },
  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
      return;
    }

    this.setState({ startTime: new Date() });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  },
  handleLapPress() {
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: [lap, ...this.state.laps]
    });
  },
  border(color) {
    return {
      // borderColor: color,
      // borderWidth: 4
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
