import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ImportFrame from '../../components/Buttons/ImportDoc';
import BoutonHome from '../../components/Buttons/BoutonHome';

const Frame3 = ({navigation}) => {

  const handleSuivantClick = () => {
    navigation.navigate("Home")
  };

  return (
    <View style={styles.frame}>
      <Image source={require('../../assets/Images/Baxy.png')} style={styles.baxyImage} />
      <ImportFrame/>
      <BoutonHome onPress={handleSuivantClick}/>
    </View>
  );
};

const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#FFFFFF',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      centered: {
        alignItems: 'center',
      },
      baxyImage: {
        width: 250,
        height: 100,
        marginTop: 50,
        margin: 'auto',
        marginBottom: 10
      },
});

export default Frame3;
