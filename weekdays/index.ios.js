// Import code needed
var React = require('react-native');
var DayItem = require('./src/day-item');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Create a react component
var Weekdays = React.createClass({
  // render: function() { ... }
  render() {
    return (
      <View style={ styles.container }>
        <Text>
          Days of the week:
        </Text>
        { this.days() }
      </View>
    );
  },
  // days: function() { ... }
  days() {
    // return DAYS.map(function(day) { ... })
    return DAYS.map(day =>
      <DayItem key={day} day={day} />
    );
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
