import React from 'react';
import { View } from 'react-native';
import styles from './MainTemplate.styles';

const MainTemplate = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default MainTemplate;
