import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {colors} from "../constants/theme"
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    color:colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default ProfileScreen;
