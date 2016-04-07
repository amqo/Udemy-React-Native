
import React, {
  MapView,
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

class Weather extends Component {
  render() {
    return (
      <MapView style={ styles.map }></MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
