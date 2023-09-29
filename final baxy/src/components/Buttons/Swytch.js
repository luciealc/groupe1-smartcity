import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const Swytch = ({ onToggle, selectedButton }) => {
  return (
    <View style={{ margin: 20, marginTop: 50 }}>
      <View style={styles.frame4Container}>
        <TouchableOpacity
          style={[
            styles.groupContainer,
            selectedButton === 'vote' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => onToggle('vote')}
        >
          <View style={styles.button}>
            <Text
              style={[
                styles.groupTitre,
                selectedButton === 'vote' ? styles.selectedText : styles.unselectedText,
              ]}
            >
              Sondage
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.groupContainer,
            selectedButton === 'polls' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => onToggle('polls')}
        >
          <View style={styles.button}>
            <Text
              style={[
                styles.groupTitre,
                selectedButton === 'polls' ? styles.selectedText : styles.unselectedText,
              ]}
            >
              Vote
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame4Container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  groupContainer: {
    width: 135,
    height: 70,
    position: 'relative',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupTitre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#353D65',
    borderRadius: 20
  },
  unselectedButton: {
    backgroundColor: '#EEF5FF',
    borderRadius: 20
  },
  selectedText: {
    color: '#FBDBB1',
  },
  unselectedText: {
    color: 'black',
  },
});

export default Swytch;
