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
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../constants/theme';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const newErrors = {};

    if (!username.trim()) newErrors.username = 'Username is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (!passwordRegex.test(password))
      newErrors.password = 'Password must include upper, lower, number & symbol';
    if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigation.navigate('Home');
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
        >
          <Image
            source={require('../assets/images/image.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <CustomText bold style={styles.title}>Create Account</CustomText>
          <CustomText style={styles.subtitle}>Please fill the form to sign up</CustomText>

          <CustomTextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              if (errors.username) setErrors({ ...errors, username: '' });
            }}
            error={!!errors.username}
            errorMessage={errors.username}
            iconName="person-outline"
          />

          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            error={!!errors.email}
            errorMessage={errors.email}
            iconName="mail-outline"
            keyboardType="email-address"
          />

          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: '' });
            }}
            error={!!errors.password}
            errorMessage={errors.password}
            secureTextEntry
            iconName="lock-closed-outline"
          />

          <CustomTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
            }}
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
            secureTextEntry
            iconName="lock-closed-outline"
          />

          <View style={styles.buttonWrapper}>
            <CustomButton title="Sign Up" onPress={validate} />
          </View>

          <CustomText style={styles.footerText}>
            Already have an account?{' '}
            <CustomText
              bold
              style={styles.footerLink}
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
  container: { flex: 1, backgroundColor: colors.background },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: wp('7%'),
    justifyContent: 'center',
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
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
    marginTop: hp('1.5%'),
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

export default SignupScreen;
