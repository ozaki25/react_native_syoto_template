import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Hello extends Component {
  static navigationOptions = {
    title: 'Hello',
  };
  render() {
    return (
      <View>
        <Text>Hello!</Text>
        <Button title="NEXT" onPress={() => this.props.navigation.navigate('World')} />
      </View>
    );
  }
}

export default Hello;
