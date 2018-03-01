import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Hello extends Component {
  static navigationOptions = {
    title: 'Hello',
  };
  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}

export default Hello;
