import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
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
    marginBottom: 15,
    padding: 5,
  },
  dialogCloseButton: {
    marginHorizontal: 15,
    marginBottom: 10,
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
      this.openDialog();
    }
  };

  onChangeText = input => this.setState({ input });

  openDialog = () => this.setState({ dialogVisible: true });

  closeDialog = () => this.setState({ dialogVisible: false });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputTextContainer}>
          <TextInput onChangeText={this.onChangeText} style={styles.inputText} autoFocus />
        </View>
        <Button onPress={this.onPressNext}>Next</Button>
        <Dialog
          title="エラー"
          buttons={<Button onPress={this.closeDialog}>Close</Button>}
          buttonsStyle={styles.dialogCloseButton}
          visible={this.state.dialogVisible}
        >
          <Text>何か入力して下さい</Text>
        </Dialog>
      </View>
    );
  }
}

export default FormScreen;
