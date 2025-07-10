import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constants/theme';
import CustomText from './CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  error = false,
  errorMessage = '',
  iconName,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const showPasswordToggle = secureTextEntry;

  return (
    <View style={styles.inputWrapper}>
      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={wp('5%')}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textGray}
          style={styles.input}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          {...props}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={wp('5%')}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && errorMessage ? (
        <CustomText style={styles.errorText}>{errorMessage}</CustomText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: hp('2%'),
    paddingHorizontal: wp('1.5%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.input,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('3%'),
  },
  input: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    fontSize: wp('3.8%'),
    color: colors.textLight,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginRight: wp('2%'),
  },
  eyeIcon: {
    paddingLeft: wp('2%'),
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: colors.errorText,
  },
  errorText: {
    fontSize: wp('3%'),
    color: colors.errorText,
    marginTop: hp('0.8%'),
  },
});

export default CustomTextInput;
