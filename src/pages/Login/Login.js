import React, { useState } from 'react';

import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Button from '../../components/atoms/Button/Button';
import CustomInput from '../../components/atoms/Input/Input';
import { signIn } from '../../../services/auth';

import loginImage from '../../assets/logo.jpeg'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn(email, password)
      .then(() => {
        navigation.replace('Main');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password'|| error.code === 'auth/user-not-found') {
          Alert.alert('Wrong Email or Password', 'Please check your credentials and try again.');
        } else {
          Alert.alert('Sign In Failed', 'An error occurred. Please try again later.');
        }
      });
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <AuthTemplate imageSource={loginImage} title="Welcome to Stream-IT!">
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
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink} onPress={navigateToSignUp}>
              Sign Up
            </Text>
          </Text>
        </View>
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
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: 'white',
  },
  signUpLink: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Login;
