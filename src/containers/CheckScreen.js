import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import CheckedMessage from '../components/CheckedMessage';
import UncheckedMessage from '../components/UncheckedMessage';

class CheckScreen extends Component {
  static navigationOptions = {
    title: 'CheckScreen',
  };

  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  onPressCheck = () => this.setState({ checked: !this.state.checked });

  onPressNext = () => this.props.navigation.navigate('FormScreen');

  render() {
    return (
      <View>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={this.onPressCheck}>
          {this.state.checked ? <CheckedMessage /> : <UncheckedMessage />}
        </TouchableOpacity>
        <Button title="Next" onPress={this.onPressNext} disabled={!this.state.checked} />
      </View>
    );
  }
}

export default CheckScreen;
