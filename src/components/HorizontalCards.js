import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HorizontalCard = ({ image, title, distance, rating }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />

    <View style={styles.overlay} />
    <View style={styles.ratingBadge}>
      <CustomText style={styles.ratingText}>{rating} ⭐</CustomText>
    </View>
    <View style={styles.textContainer}>
      <CustomText medium style={styles.title}>{title}</CustomText>
      <CustomText style={styles.distance}>{distance}</CustomText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: hp('3.5%'),
    position: 'relative',
  },
  image: {
    width: wp('90%'),
    height: hp('25%'),
    borderRadius: wp('4%'),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    height: hp('25%'),
    width: wp('90%'),
    backgroundColor: colors.bgcolor,
    borderRadius: wp('4%'),
  },
  textContainer: {
    position: 'absolute',
    bottom: hp('1.5%'),
    left: wp('4%'),
    right: wp('4%'),
  },
  title: {
    color: colors.textLight,
    fontSize: wp('4.3%'),
    marginBottom: hp('0.5%'),
  },
  distance: {
    color: colors.distance,
    fontSize: wp('3%'),
  },
  ratingBadge: {
    position: 'absolute',
    bottom: hp('1.5%'),
    right: wp('4%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.8%'),
    borderRadius: wp('3%'),
  },
  ratingText: {
    color: colors.textLight,
    fontSize: wp('3%'),
  },
});

export default HorizontalCard;
