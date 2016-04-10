import React, { Component, Text, View, StyleSheet, TextInput } from 'react-native';
import Button from '../common/button';

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

        <Text style={ styles.label }>{ this.state.errorMessage }</Text>

        <Button text='Sign Up' onPress={ this.handleSignUp.bind(this) } />
        <Button text='Cancel' onPress={ this.handleCancel.bind(this) } />
      </View>
    );
  }
  handleSignUp() {

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
  }
});

module.exports = Signup;
