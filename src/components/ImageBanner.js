import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';
import { colors } from '../constants/theme';

const ImageBanner = ({ image, title, rating, onBackPress }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} resizeMode="cover" />
    <View style={styles.overlay} />

    {/* Back Button */}
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Ionicons name="chevron-back" size={20} color="#fff" />
    </TouchableOpacity>

    {/* Title + Rating */}
    <View style={styles.titleContainer}>
      <CustomText bold style={styles.title}>{title}</CustomText>
      <CustomText style={styles.rating}>⭐ {rating}</CustomText>
    </View>
  </View>
);

const styles = StyleSheet.create({
container: {
  position: 'relative',
  marginBottom: 10,
  marginHorizontal: -24, // offset parent padding
  width: 420,
top:-12
},

  image: {
    width:'100%',
    height: 361,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,

    resizeMode:'stretch'
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: '8.4%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 15,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  rating: {
    color: '#FFD700',
    fontSize: 14,
  },
});

export default ImageBanner;
