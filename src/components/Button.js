import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'seagreen',
    paddingVertical: 10,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: 'darkgray',
  },
  text: {
    fontSize: 18,
  },
  disabledText: {
    color: 'gray',
  },
});

const Button = ({ children, onPress, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, disabled && styles.disabled]}
  >
    <Text style={[styles.text, disabled && styles.disabledText]}>{children}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};

export default Button;
