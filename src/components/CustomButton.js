// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import fonts from '../assets/fonts/fonts';
import { colors } from '../constants/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CustomButton = ({
  title,
  onPress,
  type = 'filled',
  icon,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        type === 'outlined' ? styles.outlined : styles.filled,
        style,
      ]}
    >
      <View style={styles.innerContent}>
        {icon}
        <CustomText
          bold
          style={[
            styles.text,
            type === 'outlined' ? styles.textOutlined : styles.textFilled,
            textStyle,
            icon && { marginLeft: 8 }, // spacing if icon is present
          ]}
        >
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    width: '100%',
    borderRadius: 12,
    
  },
  filled: {
    backgroundColor: colors.primary,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  innerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.medium,
    fontSize: wp('3.5%'),

  },
  textFilled: {
    color: '#0A1F29',
  },
  textOutlined: {
    color: colors.primary,
  },
});

export default CustomButton;
