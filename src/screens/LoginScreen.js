import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../constants/theme';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must include upper, lower, number & symbol');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      navigation.navigate('MainApp');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Image
          source={require('../assets/images/image.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <CustomText bold style={styles.title}>
          Welcome Back
        </CustomText>

        <CustomText style={styles.subtitle}>
          Please login to your account
        </CustomText>

        <CustomTextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (emailError) setEmailError('');
          }}
          error={!!emailError}
          errorMessage={emailError}
          iconName="mail-outline"
        />

        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (passwordError) setPasswordError('');
          }}
          error={!!passwordError}
          errorMessage={passwordError}
          iconName="lock-closed-outline"
        />

        <View style={styles.buttonWrapper}>
          <CustomButton title="Login" onPress={validate} />
        </View>

        <CustomText style={styles.footerText}>
          Don’t have an account?{' '}
          <CustomText
            bold
            style={styles.footerLink}
            onPress={() => navigation.navigate('Signup')}
          >
            Sign up
          </CustomText>
        </CustomText>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp('7%'),
    justifyContent: 'center',
  },
  image: {
    width: wp('50%'),
    height: hp('20%'),
    alignSelf: 'center',
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: wp('5.5%'),
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },
  subtitle: {
    fontSize: wp('3.8%'),
    color: colors.textGray,
    textAlign: 'center',
    marginBottom: hp('3.5%'),
  },
  buttonWrapper: {
    paddingHorizontal: wp('2%'),
    marginTop: hp('1%'),
  },
  footerText: {
    fontSize: wp('3.2%'),
    color: colors.textGray,
    textAlign: 'center',
    marginTop: hp('3%'),
  },
  footerLink: {
    color: colors.primary,
    fontSize: wp('3.2%'),
  },
});

export default LoginScreen;
