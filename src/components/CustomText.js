import React from 'react';
import { Text, StyleSheet } from 'react-native';
import FONTS from '../assets/fonts/fonts';
import { colors } from '../constants/theme';

const CustomText = ({
  children,
  style,
  bold,
  medium,
  regular,
  numberOfLines,
  ...props
}) => {
  let textStyle = styles.regular; // default

  if (bold) textStyle = styles.bold;
  else if (medium) textStyle = styles.medium;
  else if (regular) textStyle = styles.regular;

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[textStyle, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: FONTS.regular,
  },
  medium: {
    fontFamily: FONTS.medium,
  },
  bold: {
    fontFamily: FONTS.bold,
  },
});

export default CustomText;
