import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]} // Fusiona los estilos del componente con los estilos personalizados
      placeholderTextColor="white" // Color del placeholder blanco
      selectionColor="white" // Color del cursor de texto
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white', // Color del texto blanco
    borderWidth: 1, // Añade borde blanco si es necesario para mejorar la visibilidad
    borderColor: 'white', // Color del borde blanco si se añade
    borderRadius: 5, // Añade esquinas redondeadas para mejorar el estilo
    padding: 10, // Añade relleno para espaciar el texto del borde
  },
});

export default CustomInput;