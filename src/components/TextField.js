import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

// Labelled dark input with leading icon, used on Sign Up / Sign In forms
export default function TextField({
  label,
  placeholder,
  icon,             // Ionicons name, e.g. "person-outline"
  trailingIcon,     // Ionicons name, e.g. "checkmark-circle-outline"
  secure = false,
  keyboardType,
  value,
  onChangeText,
  style,
}) {
  const [hidden, setHidden] = useState(secure);
  return (
    <View style={[styles.wrap, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.field}>
        {icon ? <Ionicons name={icon} size={18} color={colors.textPlaceholder} style={styles.leading} /> : null}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.textPlaceholder}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
        {secure ? (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
            <Ionicons name={hidden ? 'eye-off-outline' : 'eye-outline'} size={18} color={colors.textPlaceholder} />
          </TouchableOpacity>
        ) : trailingIcon ? (
          <Ionicons name={trailingIcon} size={18} color={colors.textPlaceholder} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 18,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 8,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: 14,
  },
  leading: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
});
