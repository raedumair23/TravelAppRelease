import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { colors } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <CustomText bold style={[styles.textBase, styles.title]}>
        Escape the ordinary life
      </CustomText>

      <CustomText style={[styles.textBase, styles.subtitle]}>
        Discover great experiences around you and make your life interesting!
      </CustomText>

      <View style={styles.buttonGroup}>
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate('Signup')}
        />
        <CustomButton
          title="Login"
          type="outlined"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: wp('8%'),
    paddingRight: wp('8%'),
  },
  image: {
    width: wp('90%'),
    height: hp('38%'),
    marginBottom: hp('3.5%'),

  },
  textBase: {
    fontSize: wp('3.5%'),
    lineHeight: hp('3.8%'),
    color: colors.textLight,
    textAlign: 'center',
  },
  title: {
    fontSize: wp('5.2%'),
    marginBottom: hp('2%'),
  },
  subtitle: {
    color: colors.textGray,
    marginBottom: wp('4.5%'),
    lineHeight: hp('3%'),
  },
  buttonGroup: {
    width: '100%',
    gap: hp('2.2%'),
     paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    
  },
});

export default WelcomeScreen;
