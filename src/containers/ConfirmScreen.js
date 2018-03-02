import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

class ConfirmScreen extends Component {
  static navigationOptions = {
    title: 'ConfirmScreen',
  };

  constructor(props) {
    super(props);
    const { input } = this.props.navigation.state.params;
    this.state = { input };
  }

  onPressNext = () =>
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'CheckScreen' })],
    }));

  render() {
    return (
      <View>
        <Text>{this.state.input}</Text>
        <Button title="Next" onPress={this.onPressNext} />
      </View>
    );
  }
}

export default ConfirmScreen;
