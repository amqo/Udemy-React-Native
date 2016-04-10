import React, { Navigator, StyleSheet, Component } from 'react-native';

import Parse from 'parse/react-native';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import App from './components/app/app';

var ROUTES = {
  signin: Signin,
  signup: Signup,
  app: App
};

class Main extends Component {
  componentWillMount() {
    Parse.initialize('ReactAuthentication', 'belandres');
    Parse.serverURL = 'https://amqo-react-authentication.herokuapp.com/parse';
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{ name: 'signin' }}
        renderScene={ this.renderScene }
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={ route } navigator={ navigator } />
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Main;
