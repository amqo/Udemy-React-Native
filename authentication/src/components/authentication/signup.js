import React, { Component, Text, View, StyleSheet, TextInput } from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';
import _ from 'lodash';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    }
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>Sign Up</Text>

        <Text style={ styles.label }>Username:</Text>
        <TextInput
          onChangeText={(text) => {
            this.setState({ username: text })
          }}
          value={ this.state.username }
          style={ styles.input } />

        <Text style={ styles.label }>Password:</Text>
        <TextInput
          secureTextEntry={ true }
          style={ styles.input }
          onChangeText={ (text) => this.setState({ password: text }) }
          value={ this.state.password } />

        <Text style={ styles.label }>Confirm Password:</Text>
        <TextInput
          secureTextEntry={ true }
          style={ styles.input }
          onChangeText={ (text) => this.setState({ confirmPassword: text }) }
          value={ this.state.confirmPassword } />

        <Text style={ [styles.label, styles.errorLabel] }>{ this.state.errorMessage }</Text>

        <Button text='Sign Up' onPress={ this.handleSignUp.bind(this) } />
        <Button text='I have an account' onPress={ this.handleCancel.bind(this) } />
      </View>
    );
  }
  handleSignUp() {
    if (this.state.username === '') {
      return this.setState({
        errorMessage: 'Enter a Username'
      });
    } else if (this.state.password === '') {
      return this.setState({
        errorMessage: 'Enter a Password'
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      return this.setState({
        errorMessage: 'Your passwords do not match'
      });
    }

    var user = new Parse.User();
    user.set('username', this.state.username);
    user.set('password', this.state.password);
    user.signUp(null, {
      success: (user) => {
        console.log(user);
        this.props.navigator.immediatelyResetRouteStack([{
          name: 'app',
          username: this.state.username
        }]);
      },
      error: (user, error) => {
        console.log(user, error);
        this.setState({
          password: '',
          confirmPassword: '',
          errorMessage: _.capitalize(error.message)
        });
      }
    });
  }
  handleCancel() {
    this.props.navigator.pop();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
  },
  errorLabel: {
    color: 'red'
  }
});

module.exports = Signup;
