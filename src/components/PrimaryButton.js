import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts, radius } from '../theme';

// White pill button used across the whole app ("Continue", "Sign In", "Enable"...)
export default function PrimaryButton({ label, onPress, variant = 'solid', style }) {
  const solid = variant === 'solid';
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.base, solid ? styles.solid : styles.outline, style]}
    >
      <Text style={[styles.label, { color: solid ? colors.black : colors.white }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  solid: {
    backgroundColor: colors.white,
  },
  outline: {
    borderWidth: 1,
    borderColor: '#4A4A4A',
    backgroundColor: 'transparent',
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 15,
  },
});
