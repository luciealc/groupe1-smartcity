import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import pouceBleu from '../../assets/Images/pouceBleu.svg'
import pouceBas from '../../assets/Images/pouceBas.svg'
import Share from '../../assets/Images/Share.svg'
import Com from '../../assets/Images/Com.svg'


const CardCollapse = ({ title, preview, fullText, imageSource }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.cardHeader}
      >
        <Image source={imageSource} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{title}</Text>
          {isCollapsed ? (
            <Text style={styles.cardPreview}>{preview}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <Text style={styles.cardFullText}>{fullText}</Text>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <View style={styles.label}>
            <View style={styles.rec} />
            <Text style={styles.number}>+787</Text>
          </View>
          <View style={styles.shape}>
            <Image
              style={styles.shapeImage}
              source={pouceBleu}
            />
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.label}>
            <View style={styles.rec} />
            <Text style={styles.number}>+787</Text>
          </View>
          <View style={styles.shape}>
            <Image
              style={styles.shapeImage}
              source={pouceBas}
            />
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.label}>
            <View style={styles.rec} />
            <Text style={styles.number}>+787</Text>
          </View>
          <View style={styles.shape}>
            <View style={styles.shape}>
            <Image
              style={styles.shapeImage}
              source={Com}
            />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.label}>
            <View style={styles.rec} />
            <Text style={styles.number}>+787</Text>
          </View>
          <View style={styles.shape}>
            <View style={styles.shape}>
              <Image
                style={styles.shapeImage}
                source={Share}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.rectangle} />
        <Text style={styles.commentText}>
          Ce project est excellent mais il manque u|
        </Text>
        <Image
          style={styles.commentImage}
          source={{ uri: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg' }}
        />
      </View>
      </Collapsible>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: screenWidth * 0.9,
    zIndex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    borderColor: 'grey',
    paddingBottom: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: 125,
    height: 111,
  },
  cardInfo: {
    display: 'flex',
    marginLeft: 20,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#353D65'
  },
  cardPreview: {
    marginTop: 10,
    maxHeight: 100, // Set a maximum height for the preview
    overflow: 'hidden',
  },
  cardFullText: {
    marginTop: 10,
  },
  buttonContainer: {
    width: 299,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  button: {
    width: 65,
    height: 34,
    position: 'relative',
  },
  label: {
    width: 30,
    height: 16,
    left: 35,
    top: 9,
    position: 'absolute',
  },
  rec: {
    width: 30,
    height: 16,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#3A75FD',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  number: {
    width: 22,
    height: 12,
    left: 3,
    top: 2,
    position: 'absolute',
    color: 'white',
    fontSize: 9,
    fontWeight: '500',
    width: '100%'
  },
  shape: {
    width: 35,
    height: 34,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  shapeImage: {
    width: 20.38,
    height: 23.09,
    left: 7,
    top: 4.86,
    position: 'absolute',
  },
  commentContainer: {
    width: 310,
    height: 40,
    position: 'relative',
    margin: 'auto'
  },
  rectangle: {
    width: 310,
    height: 40,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  commentText: {
    left: 48,
    top: 14,
    position: 'absolute',
    color: '#AFAFAF',
    fontSize: 10,
    fontWeight: '500',
    width: '100%'
  },
  commentImage: {
    width: 33,
    height: 32,
    left: 5,
    top: 4,
    position: 'absolute',
    borderRadius: 30,
  },
});

export default CardCollapse;
