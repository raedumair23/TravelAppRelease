import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';
import { colors } from '../constants/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ImageBanner = ({ image, title, rating, onBackPress }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} resizeMode="cover" />
    <View style={styles.overlay} />

    {/* Back Button */}
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Ionicons name="chevron-back" size={wp('5%')} color="#fff" />
    </TouchableOpacity>

    {/* Title + Rating */}
    <View style={styles.titleContainer}>
      <CustomText medium style={styles.title}>{title}</CustomText>
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
    width: '100%',
    height: hp('45%'),
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    borderBottomLeftRadius: wp('12%'),
    borderBottomRightRadius: wp('12%'),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: hp('45%'),
    width: '100%',
    backgroundColor: colors.bgcolor,
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    borderBottomLeftRadius: wp('12%'),
    borderBottomRightRadius: wp('12%'),
  },
  backButton: {
    position: 'absolute',
    top: hp('6%'),
    left: wp('7%'),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('3.5%'),
    borderRadius: wp('3%'),
    height: hp('5.5%'),
    width: hp('5.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  titleContainer: {
    position: 'absolute',
    bottom: hp('2%'),
    left: wp('8%'),
    right: wp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.textLight,
    fontSize: wp('4.5%'),
  },
  rating: {
    color: colors.rating,
    fontSize: wp('3.5%'),
  },
});

export default ImageBanner;
