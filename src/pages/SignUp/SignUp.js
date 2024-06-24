import React, { useState } from 'react';
import { View } from 'react-native';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { signUp } from '../../../services/auth'; // Ajusta la ruta de importación según sea necesario

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signUp(email, password)
      .then(() => {
        console.log('User signed up successfully!');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthTemplate title="Sign Up">
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </AuthTemplate>
  );
};

export default SignUp;
