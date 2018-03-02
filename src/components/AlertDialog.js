import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
  },
});

const AlertDialog = ({ visible, closeDialog }) => (
  <Dialog
    title="エラー"
    visible={visible}
    buttons={<Button title="close" onPress={closeDialog} />}
    buttonsStyle={styles.buttonStyle}
  >
    <Text>何か入力して下さい</Text>
  </Dialog>
);

AlertDialog.propTypes = {
  visible: PropTypes.bool,
  closeDialog: PropTypes.func,
};

AlertDialog.defaultProps = {
  visible: false,
  closeDialog: () => {},
};

export default AlertDialog;
