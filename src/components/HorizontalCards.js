import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../constants/theme';

const VerticalCard = ({ image, title, distance, rating }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />

    {/* Dark overlay */}
    <View style={styles.overlay} />

    {/* Rating badge on top right */}
    <View style={styles.ratingBadge}>
      <CustomText style={styles.ratingText}>{rating} ⭐</CustomText>
    </View>

    {/* Text over image (bottom-left) */}
    <View style={styles.textContainer}>
      <CustomText medium style={styles.title}>{title}</CustomText>
      <CustomText style={styles.distance}>{distance}</CustomText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    position: 'relative',
  },
  image: {
    width: 390,
    height: 200,
    borderRadius: 16,
    resizeMode:'cover',
    left:-10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left:-10,    
    height: 200,
    width: 390,
    backgroundColor:colors.bgcolor,
    borderRadius: 16,
  },
  textContainer: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    right: 16,
  },
  title: {
    color: colors.textLight,
    fontSize: 20,
    marginBottom: 4,
  },
  distance: {
    color:colors.distance,
    fontSize: 13,
  },
 ratingBadge: {
  position: 'absolute',
  bottom: 12,     // ✅ was `top: 12`, now `bottom: 12`
  right: 12,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 12,
},

  ratingText: {
    color: colors.textLight,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default VerticalCard;
