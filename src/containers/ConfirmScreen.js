import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

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
      <View style={styles.container}>
        <Text>{this.state.input}</Text>
        <Button onPress={this.onPressNext}>Next</Button>
      </View>
    );
  }
}

export default ConfirmScreen;
