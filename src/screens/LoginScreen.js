import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { colors } from '../constants/theme';

const { width } = Dimensions.get('window');

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
    setPasswordError(
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
    );
    isValid = false;
  } else {
    setPasswordError('');
  }

    if (isValid) {
      Alert.alert('Success', 'Login successful!');
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

        <CustomText bold style={[styles.textBase, styles.title]}>
          Welcome Back
        </CustomText>

        <CustomText style={[styles.textBase, styles.subtitle]}>
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
        />

        <CustomButton title="Login" onPress={validate} />

        <CustomText style={[styles.textBase, styles.footerText]}>
          Don’t have an account?{' '}
          <CustomText
            bold
            style={[styles.textBase, styles.footerLink]}
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
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  image: {
    width: width * 0.5,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textBase: {
    fontSize: 16,
    lineHeight: 30,
    color: colors.textLight,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 6,
  },
  subtitle: {
    color: colors.textGray,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: 24,
    lineHeight: 22,
  },
  footerLink: {
    color: colors.primary,
  },
});

export default LoginScreen;
