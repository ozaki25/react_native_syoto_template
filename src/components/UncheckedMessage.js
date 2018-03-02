import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UncheckedMessage = () => (
  <Text>
    <Icon name="check-box-outline-blank" size={10} />
    チェックをするとボタンが活性化します
  </Text>
);

export default UncheckedMessage;
