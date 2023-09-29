import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput} from 'react-native-paper';
import BoutonSuivant from '../../components/Buttons/BouttonSuivant';


const Frame2 = ({navigation}) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmerMotDePasse, setConfirmerMotDePasse] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSuivantClick = () => {
    const userJson = {
      nom,
      email,
      motDePasse,
      confirmerMotDePasse,
    };

    setUserData(userJson);
    console.log('Données utilisateur JSON :', userJson);
    console.log(navigation)
    navigation.navigate("ImportFile")
  };

  return (
    <View style={styles.frame}>
      <Image source={require('../../assets/Images/Baxy.png')} style={styles.baxyImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Créez votre compte</Text>
      </View>
      <View style={styles.fields}>
        <TextInput
          label="Entrer nom"
          value={nom}
          onChangeText={(text) => setNom(text)}
          style={styles.field}
          theme={{
            colors: {
              primary: '#00000033',
            },
          }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.field}
          theme={{
            colors: {
              primary: '#00000033',
            },
          }}
        />
        <TextInput
          label="Mot de passe"
          value={motDePasse}
          onChangeText={(text) => setMotDePasse(text)}
          secureTextEntry
          style={styles.field}
          theme={{
            colors: {
              primary: '#00000033',
            },
          }}
        />
        <TextInput
          label="Confirmer mot de passe"
          value={confirmerMotDePasse}
          onChangeText={(text) => setConfirmerMotDePasse(text)}
          secureTextEntry
          style={styles.field}
          theme={{
            colors: {
              primary: '#00000033',
            },
          }}
        />
      </View>
      <BoutonSuivant onPress={handleSuivantClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: '#ffffff',
    boxShadow: '4px 4px 20px #00000026',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 390,
    height: 844,
    justifyContent: 'flex-start',
    padding: 0,
    overflow: 'hidden',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    color: '#353d65',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 35,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
  },
  fields: {
    width: '90%',
    marginTop: 40,
  },
  field: {
    marginBottom: 20,
    width: '100%',
  },
  baxyImage: {
    width: 250,
    height: 100,
    marginTop: 60,
    margin: 'auto'
  },
});

export default Frame2;
