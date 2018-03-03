import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import CheckedMessage from '../components/CheckedMessage';
import UncheckedMessage from '../components/UncheckedMessage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  checkMessage: {
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
  },
});

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
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressCheck} style={styles.checkMessage}>
          {this.state.checked ? <CheckedMessage /> : <UncheckedMessage />}
        </TouchableOpacity>
        <Button onPress={this.onPressNext} disabled={!this.state.checked}>
          Next
        </Button>
      </View>
    );
  }
}

export default CheckScreen;
