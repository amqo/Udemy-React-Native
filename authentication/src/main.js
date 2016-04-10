import React, { Navigator, StyleSheet, Component } from 'react-native';

import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';

var ROUTES = {
  signin: Signin
};

class Main extends Component {
  componentWillMount() {
    Parse.initialize('myAppId','unused');
    Parse.serverURL = 'https://amqo-react-authentication.herokuapp.com/parse';
  }
  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{ name: 'signin' }}
        renderScene={ this.renderScene.bind(this) }
        configureScene={() => {
          return Navigator.SceneConfigs.FloatRight;
        }} />
    );
  }
  renderScene(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component />
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Main;
