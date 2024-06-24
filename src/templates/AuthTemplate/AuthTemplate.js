import React from 'react';
import { View, Image, Text } from 'react-native'; // Añade importación de Text
import styles from './AuthTemplate.styles';

const AuthTemplate = ({ children, imageSource }) => (
  <View style={styles.container}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.messageContainer}>
      <Text style={styles.message}>Welcome to Stream-IT!</Text>
    </View>
    {children}
  </View>
);

export default AuthTemplate;
