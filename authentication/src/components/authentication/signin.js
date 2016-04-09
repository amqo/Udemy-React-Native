import React, { Component, View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';
import _ from 'lodash';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>Sign In</Text>

        <Text style={ styles.label }>Username:</Text>
        <TextInput
          onChangeText={ (text) => {
            this.setState({ username: text })
          } }
          value={ this.state.username }
          style={ styles.input } />

        <Text style={ styles.label }>Password:</Text>
        <TextInput
          secureTextEntry={ true }
          style={ styles.input }
          onChangeText={ (text) => this.setState({ password: text }) }
          value={ this.state.password } />
        <Text style={ styles.label }>{ this.state.errorMessage }</Text>
        <Button text='Sign In' onPress={ this.handleSignIn.bind(this) } />
      </View>
    );
  }

  handleSignIn() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => {
        console.log(user);
        this.setState({
          password: '',
          errorMessage: ''
        });
      },
      error: (data, error) => {
        console.log(data, error);
        this.setState({
          password: '',
          errorMessage: _.capitalize(error.message)
        });
      }
    });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
      padding: 4,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      margin: 5,
      width: 200,
      alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

module.exports = Signin;
