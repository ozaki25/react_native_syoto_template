import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckedMessage = () => (
  <Text>
    <Icon name="check-box" size={10} />
    チェックを外すとボタンが非活性化します
  </Text>
);

export default CheckedMessage;
