// Import code needed

// var React = require('react-native');
// var DayItem = require('./src/day-item');

// var AppRegistry = React.AppRegistry;
// var Text = React.Text;
// var View = React.View;
// var StyleSheet = React.StyleSheet;

//[...]

import React, { AppRegistry, View, StyleSheet } from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

// Create a react component
var Weekdays = React.createClass({
  // render: function() { ... }
  render() {
    return (
      <View style={ styles.container }>
        { this.days() }
      </View>
    );
  },
  // days: function() { ... }
  days() {
    var dayItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={ day } daysUntil={ i + 1 } key={ i } />
      );
    }
    return dayItems;
  }
});

//Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Vertical
    alignItems: 'center'       // Horizontal
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
