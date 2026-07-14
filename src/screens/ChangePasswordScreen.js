import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';
import ScreenHeader from '../components/ScreenHeader';

const RULES = [
  'At least 8 characters',
  'One uppercase letter',
  'One number',
  'One special character',
];

// "Change Password" — current/new/confirm with strength meter and checklist
export default function ChangePasswordScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <ScreenHeader title="Change Password" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Lock illustration */}
          <View style={styles.lockWrap}>
            <View style={styles.lockCircle}>
              <Ionicons name="lock-closed-outline" size={26} color={colors.text} />
            </View>
            <Text style={styles.lockText}>Choose a strong password that you{'\n'}haven't used before.</Text>
          </View>

          <TextField label="Current Password" placeholder="••••••••" secure />
          <TextField label="New Password" placeholder="••••••••" secure />

          {/* Strength meter */}
          <View style={styles.strengthRow}>
            <View style={[styles.strengthBar, styles.strengthOn]} />
            <View style={[styles.strengthBar, styles.strengthOn]} />
            <View style={[styles.strengthBar, styles.strengthOn]} />
            <Text style={styles.strengthLabel}>Strong</Text>
          </View>

          <TextField label="Confirm New Password" placeholder="••••••••" secure />

          {/* Rules checklist */}
          <View style={styles.rules}>
            {RULES.map((r) => (
              <View key={r} style={styles.rule}>
                <Ionicons name="checkmark" size={14} color="#4ECB71" />
                <Text style={styles.ruleText}>{r}</Text>
              </View>
            ))}
          </View>

          <PrimaryButton label="Update Password" onPress={() => navigation.goBack()} />
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
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
  lockWrap: {
    alignItems: 'center',
    marginVertical: 20,
  },
  lockCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  lockText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
  },
  strengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -8,
    marginBottom: 18,
  },
  strengthBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2C2C2C',
  },
  strengthOn: {
    backgroundColor: colors.white,
  },
  strengthLabel: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.text,
    marginLeft: 4,
  },
  rules: {
    marginBottom: 22,
    gap: 8,
  },
  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ruleText: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  forgot: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 18,
  },
});
