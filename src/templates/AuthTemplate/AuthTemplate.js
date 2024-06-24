import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './AuthTemplate.styles';

const AuthTemplate = ({ children, imageSource, title }) => (
  <View style={styles.container}>
    {imageSource && (
      <Image source={imageSource} style={styles.image} />
    )}
    <View style={styles.messageContainer}>
      <Text style={styles.message}>{title}</Text>
    </View>
    {children}
  </View>
);

export default AuthTemplate;
