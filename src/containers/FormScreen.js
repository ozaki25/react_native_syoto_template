import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AlertDialog from '../components/AlertDialog';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  inputTextContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginBottom: 15,
    padding: 5,
  },
});

class FormScreen extends Component {
  static navigationOptions = {
    title: 'FormScreen',
  };

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      dialogVisible: false,
    };
  }

  onPressNext = () => {
    const { input } = this.state;
    if (input) {
      this.props.navigation.navigate('ConfirmScreen', { input });
    } else {
      this.setState({ dialogVisible: true });
    }
  };

  onChangeText = input => this.setState({ input });

  closeDialog = () => this.setState({ dialogVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputTextContainer}>
          <TextInput onChangeText={this.onChangeText} style={styles.inputText} />
        </View>
        <Button onPress={this.onPressNext}>Next</Button>
        <AlertDialog visible={this.state.dialogVisible} closeDialog={this.closeDialog} />
      </View>
    );
  }
}

export default FormScreen;
