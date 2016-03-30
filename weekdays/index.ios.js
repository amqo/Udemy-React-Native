// Import code needed
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// Create a react component
var Weekdays = React.createClass({
  render() {
    return (
      <View style={ styles.container }>
        <Text>
          Days of the week:
        </Text>
      </View>
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
