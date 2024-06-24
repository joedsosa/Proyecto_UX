import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Button from '../../components/atoms/Button/Button';
import CustomInput from '../../components/atoms/Input/Input';
import { signUp } from '../../../services/auth';

import loginImage from '../../assets/logo.jpeg'; 

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signUp(email, password)
      .then(() => {
        Alert.alert('User Created Successfully', 'You can now login with your new account.');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use'|| error.code === 'auth/invalid-email') {
          Alert.alert('Email Already in Use', 'Please choose another email address.');
        } else {
          console.error(error);
          Alert.alert('Sign Up Failed', 'An error occurred. Please try again later.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <AuthTemplate imageSource={loginImage} title="May the USER be with You">
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="white"
          selectionColor="white"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white"
          selectionColor="white"
        />
        <Button title="Sign Up" onPress={handleSignUp} />
      </AuthTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
});

export default SignUp;
