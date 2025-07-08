import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { colors } from '../constants/theme';

const { width } = Dimensions.get('window');

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
    paddingHorizontal: 30,
  },
  image: {
    width: width * 0.8,
    height: 300,
    marginBottom: 30,
  },
  textBase: {
    fontSize: 16,
    lineHeight: 30,
    color: colors.textLight,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textGray,
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonGroup: {
    width: '100%',
    gap: 16, // If not supported, fallback below
    // Alternative for older RN versions:
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default WelcomeScreen;
