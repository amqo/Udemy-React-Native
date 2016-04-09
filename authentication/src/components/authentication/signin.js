import React, { Component, View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../common/button';

class Signin extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Sign In</Text>
        <Text style={ styles.label }>Username:</Text>
        <TextInput style={ styles.input }></TextInput>
        <Text style={ styles.label }>Password:</Text>
        <TextInput secureTextEntry={ true } style={ styles.input }></TextInput>
        <Button text='Sign In' onPress={ this.handleSignIn.bind(this) } />
      </View>
    );
  }

  handleSignIn() {
    console.log('Sign In button press');
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
