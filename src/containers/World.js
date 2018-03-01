import React, { Component } from 'react';
import { Text, View } from 'react-native';

class World extends Component {
  static navigationOptions = {
    title: 'World',
  };
  render() {
    return (
      <View>
        <Text>World!</Text>
      </View>
    );
  }
}

export default World;
