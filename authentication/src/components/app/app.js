import React, { Component, View, Text, StyleSheet } from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    Parse.User.currentAsync()
    .then((user) => {
      this.setState({
        user: user
      });
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <View style={ styles.container }>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={ styles.container }>
        <Text>Welcome back, { this.state.user.get('username') }! </Text>
        <Button text='Log out' onPress={ this.handleLogOut.bind(this) } />
      </View>
    );
  }

  handleLogOut() {
    this.props.navigator.immediatelyResetRouteStack([{
      name: 'signin',
      username: this.props.route.username
    }]);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = App;
