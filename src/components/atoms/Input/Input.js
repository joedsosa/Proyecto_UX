import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import inputStyles from './Input.styles'; 

const CustomInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, inputStyles.input, props.style]} 
      placeholderTextColor="white" 
      selectionColor="white" 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white', 
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 5, 
    padding: 10, 
  },
});

export default CustomInput;
