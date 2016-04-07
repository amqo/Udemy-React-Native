
import React, {
  MapView,
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

import Api from './src/api';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
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

    Api(region.latitude, region.longitude)
      .then((data) => {
        this.setState(data)
        console.log(data);
      });
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
