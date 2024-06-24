import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
