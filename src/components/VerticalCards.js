import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VerticalCard = ({ image, title, distance }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.overlay} />

    <View style={styles.textContainer}>
      <CustomText medium style={styles.title}>{title}</CustomText>
      <CustomText style={styles.distance}>{distance}</CustomText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: wp('45%'),
    height: hp('30%'),
    marginRight: wp('4%'),
    position: 'relative',
    borderRadius: wp('4%'),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: wp('4%'),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.bgcolor,
    borderRadius: wp('4%'),
  },
  textContainer: {
    position: 'absolute',
    bottom: hp('1.5%'),
    left: wp('3%'),
    right: wp('3%'),
  },
  title: {
    color: colors.textLight,
    fontSize: wp('3.5%'),
    marginBottom: hp('0.5%'),
  },
  distance: {
    color: colors.distance,
    fontSize: wp('3%'),
  },
});

export default VerticalCard;
