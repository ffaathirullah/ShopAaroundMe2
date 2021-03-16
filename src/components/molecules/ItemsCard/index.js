import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ImageDummy} from '../../../assets';
import Rating from '../Rating';

const ItemsCard = ({}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={ImageDummy} />
        <View style={styles.content}>
          <Text style={styles.text}>Paket PC & Laptop</Text>
          <Rating />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemsCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  content: {padding: 12},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
});
