
import React, {
  MapView,
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  }
  render() {
    return (
      <MapView
        annotations={ [this.state.pin] }
        style={ styles.map }
        onRegionChangeComplete={
          this.onRegionChangeComplete.bind(this) } >
      </MapView>
    );
  }
  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
