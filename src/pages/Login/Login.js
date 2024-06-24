// Login.js
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import Button from '../../components/atoms/Button/Button';
import CustomInput from '../../components/atoms/Input/Input'; // Utiliza tu componente personalizado
import { signIn } from '../../../services/auth'; // Ajusta la ruta de importación según sea necesario

// Importa la imagen que deseas usar
import loginImage from '../../assets/logo.jpeg';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn(email, password)
      .then(() => {
        navigation.replace('Main'); // Opcionalmente, podrías usar navigation.navigate('Main');
      })
      .catch((error) => {
        console.error('Error signing in:', error.message); // Maneja los errores de inicio de sesión
        // Aquí podrías mostrar un mensaje de error al usuario si lo prefieres
      });
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <AuthTemplate imageSource={loginImage}>
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="white" // Color del placeholder blanco
          selectionColor="white" // Color del cursor de texto
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white" // Color del placeholder blanco
          selectionColor="white" // Color del cursor de texto
        />
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an account? 
            <Text style={styles.signUpLink} onPress={navigateToSignUp}> Sign Up</Text>
          </Text>
        </View>
      </AuthTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fondo negro
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40, // Altura fija para los inputs
    width: '100%', // Ancho del 100% del contenedor padre
    backgroundColor: 'black', // Fondo blanco para el input
    bordercolor: 'white',
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10, // Espaciado interno horizontal
    marginBottom: 10, // Añade margen inferior para separar los inputs
    color: 'white', // Color del texto dentro del input
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: 'white', // Texto en blanco
  },
  signUpLink: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Login;
