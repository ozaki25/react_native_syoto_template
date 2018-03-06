import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'mediumseagreen',
    paddingVertical: 10,
  },
  disabled: {
    backgroundColor: 'darkgray',
  },
  text: {
    color: 'white',
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
  children: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onPress: () => {},
  disabled: false,
};

export default Button;
