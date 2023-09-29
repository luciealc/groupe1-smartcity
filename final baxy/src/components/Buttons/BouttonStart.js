import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoutonConnecterComponent = (props) => {
  return (
    <TouchableOpacity style={styles.boutonConnecter} onPress={() => props.navigation.navigate("Inscription")}>
      <Text style={styles.seConnecter}>Se connecter</Text>
      <View style={styles.signUp}>
        <Text style={styles.sInscrire}>S'inscrire</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boutonConnecter: {
    backgroundColor: '#eef5ff',
    borderWidth: 3,
    borderColor: '#eef5ff',
    borderRadius: 20,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    width: 300,
    height: 51,
    left: 115,
    top: 3,
  },
  seConnecter: {
    textAlign: 'left',
    color: '#353d65',
    fontStyle: 'normal',
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    margin: 0,
    left: 60,
  },
  signUp: {
    backgroundColor: '#353d65',
    boxShadow: '-2px 3px 30px #0f4c544d',
    borderRadius: 20,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 21,
    boxSizing: 'border-box',
    width: 151,
    height: 57,
    left: -12,
    top: 0,
  },
  sInscrire: {
    textAlign: 'left',
    color: '#fbdbb1',
    fontStyle: 'normal',
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    margin: 0,
  },
});

export default BoutonConnecterComponent;