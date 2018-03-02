import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

class Hello extends Component {
  static navigationOptions = {
    title: 'Hello',
  };

  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  onPressCheck = () => this.setState({ checked: !this.state.checked });

  onPressNext = () => this.props.navigation.navigate('World');

  render() {
    return (
      <View>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={this.onPressCheck}>
          <Text>チェックをするとボタンが活性化します</Text>
        </TouchableOpacity>
        <Button title="Next" onPress={this.onPressNext} disabled={!this.state.checked} />
      </View>
    );
  }
}

export default Hello;
