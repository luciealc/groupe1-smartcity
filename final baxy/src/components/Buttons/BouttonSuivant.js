import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BoutonSuivant = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Suivant</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fbdbb1',
    borderRadius: 20,
    width: 151,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#353d65',
    fontStyle: 'normal',
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
  },
});

export default BoutonSuivant;
