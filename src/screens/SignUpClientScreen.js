import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';
import ScreenHeader from '../components/ScreenHeader';

// Client Sign Up form (Figma: "Signup Client" — Username / names / phone / email / password)
export default function SignUpClientScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ScreenHeader title="Sign Up" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <TextField label="Username" placeholder="Username" icon="person-outline" trailingIcon="checkmark-circle-outline" />

          <View style={styles.rowFields}>
            <TextField label="First Name" placeholder="First Name" icon="person-outline" style={styles.half} />
            <TextField label="Last Name" placeholder="Last Name" icon="person-outline" style={styles.half} />
          </View>

          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneField}>
            <Text style={styles.flag}>{'\u{1F1F3}\u{1F1EC}'}</Text>
            <Ionicons name="chevron-down" size={14} color={colors.textPlaceholder} style={{ marginRight: 8 }} />
            <Text style={styles.dialCode}>+234</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="000 000 0000"
              placeholderTextColor={colors.textPlaceholder}
              keyboardType="phone-pad"
            />
          </View>

          <TextField label="Email Address" placeholder="Email Address" icon="mail-outline" keyboardType="email-address" />
          <TextField label="Create Password" placeholder="Create Password" icon="shield-checkmark-outline" secure />

          <PrimaryButton label="Continue" style={{ marginTop: 10 }} onPress={() => navigation.navigate('Otp')} />
          <Text style={styles.google}>
            Continue with <Text style={styles.googleBold}>Google</Text>
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 28,
  },
  rowFields: {
    flexDirection: 'row',
    gap: 14,
  },
  half: {
    flex: 1,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 8,
  },
  phoneField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  flag: {
    fontSize: 16,
    marginRight: 4,
  },
  dialCode: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginRight: 6,
  },
  phoneInput: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
  google: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 24,
  },
  googleBold: {
    fontFamily: fonts.bold,
    color: colors.text,
  },
});
