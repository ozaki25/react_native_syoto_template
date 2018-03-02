import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class FormScreen extends Component {
  static navigationOptions = {
    title: 'FormScreen',
  };

  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  onPressNext = () => this.props.navigation.navigate('ConfirmScreen', { input: this.state.input });

  onChangeText = input => this.setState({ input });

  render() {
    return (
      <View>
        <Text>World!</Text>
        <Text>{this.state.input}</Text>
        <View>
          <TextInput onChangeText={this.onChangeText} />
        </View>
        <Button title="Next" onPress={this.onPressNext} />
      </View>
    );
  }
}

export default FormScreen;
