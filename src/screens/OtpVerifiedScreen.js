import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';
import PrimaryButton from '../components/PrimaryButton';

// "OTP Verified" confirmation with big check ring
export default function OtpVerifiedScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.ring}>
          <Ionicons name="checkmark" size={44} color={colors.white} />
        </View>
        <Text style={styles.title}>OTP Verified</Text>
      </View>
      <View style={styles.footer}>
        <PrimaryButton label="Continue to Sign In" onPress={() => navigation.replace('SignIn', { role: route.params?.role })} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 20,
    color: colors.textSecondary,
  },
  footer: {
    paddingHorizontal: 28,
    paddingBottom: 32,
  },
});
