import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../constants/theme';

const HorizontalCard = ({ image, title, distance }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />

    {/* Dark Overlay */}
    <View style={styles.overlay} />

    {/* Text on top of overlay */}
    <View style={styles.textContainer}>
      <CustomText medium style={styles.title}>{title}</CustomText>
      <CustomText style={styles.distance}>{distance}</CustomText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 180, // Less width
    height: 250, // More height
    marginRight: 16,
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden', // Prevent content overflow
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor:colors.bgcolor,
    borderRadius: 16,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  title: {
    color: colors.textLight,
    fontSize: 16,
    marginBottom: 2,
  },
  distance: {
    color:colors.distance,
    fontSize: 13,
  },
});

export default HorizontalCard;
