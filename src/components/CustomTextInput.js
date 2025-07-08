import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors } from '../constants/theme';
import CustomText from './CustomText';

const CustomTextInput = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  value,
  onChangeText,
  error = false,
  errorMessage = '',
  style,
  ...props
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textGray}
        style={[
          styles.input,
          error && styles.errorBorder,
          style,
        ]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...props}
      />
      {error && errorMessage ? (
        <CustomText style={styles.errorText}>
          {errorMessage}
        </CustomText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#0D2C3B',
    color: colors.textLight,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    textAlign: 'left',
    marginTop: 4,
  },
});

export default CustomTextInput;
