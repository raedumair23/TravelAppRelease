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
  ScrollView,
} from 'react-native';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../constants/theme';

const { width } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let valid = true;
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

   

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      Alert.alert('Success', 'Signup successful!');
      // navigation.navigate('Login');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('../assets/images/image.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <CustomText bold style={[styles.textBase, styles.title]}>
            Create Account
          </CustomText>

          <CustomText style={[styles.textBase, styles.subtitle]}>
            Please fill the form to sign up
          </CustomText>

          <CustomTextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              if (errors.username) setErrors({ ...errors, username: '' });
            }}
            error={!!errors.username}
            errorMessage={errors.username}
          />

          <CustomTextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            error={!!errors.email}
            errorMessage={errors.email}
          />

          <CustomTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: '' });
            }}
            error={!!errors.password}
            errorMessage={errors.password}
          />

          <CustomTextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
            }}
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
          />

          <CustomButton title="Sign Up" onPress={validate} />

          <CustomText style={[styles.textBase, styles.footerText]}>
            Already have an account?{' '}
            <CustomText
              bold
              style={[styles.textBase, styles.footerLink]}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </CustomText>
          </CustomText>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
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

export default SignupScreen;
