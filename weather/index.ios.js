
import React, {
  MapView,
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
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
      region: null,
      city: '',
      temperature: '',
      description: ''
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  render() {
    if (this.state.region) {
      return (
        <View style={ styles.container }>
          <MapView
            region={ this.state.region }
            annotations={ [this.state.pin] }
            style={ styles.map }
            onRegionChange={ this.onRegionChange.bind(this) }
            onRegionChangeComplete={ this.onRegionChangeComplete.bind(this) } />
          <View style={ styles.textWrapper }>
            <Text style={ styles.text } >{ this.state.city }</Text>
            <Text style={ styles.text } >{ this.state.temperature }</Text>
            <Text style={ styles.text } >{ this.state.description }</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={ styles.container }>
        <MapView
          annotations={ [this.state.pin] }
          style={ styles.map }
          onRegionChange={ this.onRegionChange.bind(this) }
          onRegionChangeComplete={ this.onRegionChangeComplete.bind(this) } >
        </MapView>
        <View style={ styles.textWrapper }>
          <Text style={ styles.text } >{ this.state.city }</Text>
          <Text style={ styles.text } >{ this.state.temperature }</Text>
          <Text style={ styles.text } >{ this.state.description }</Text>
        </View>
      </View>
    );
  }
  onRegionChange(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  }
  onRegionChangeComplete(region) {
    Api(region.latitude, region.longitude)
      .then((data) => {
        this.setState(data);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 4,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
