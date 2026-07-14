import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import ScreenHeader from '../components/ScreenHeader';

const STEPS = [
  { key: '1', num: '1', title: 'Email Address', badge: 'VERIFIED', sub: 'rachael@email.com' },
  { key: '2', num: '2', title: 'Phone Number', badge: 'VERIFIED', sub: '+234 812 000 0000' },
  { key: '3', num: '3', title: 'Government ID', badge: 'VERIFIED', sub: 'National ID · Submitted 12 Oct 2024' },
  { key: '4', num: '4', title: 'Selfie / Liveness Check', badge: 'VERIFIED', sub: 'Completed 12 Oct 2024' },
  { key: '5', num: '5', title: 'Address Proof', badge: 'PENDING', sub: 'Utility bill or bank statement' },
];

// "Identity Verification" — verification checklist + proof-of-address upload
export default function IdentityVerificationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <ScreenHeader title="Identity Verification" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Verified banner */}
          <View style={styles.banner}>
            <View style={styles.bannerIcon}>
              <Ionicons name="checkmark" size={16} color="#FFFFFF" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>Account Verified</Text>
              <Text style={styles.bannerSub}>Your identity has been successfully verified.</Text>
            </View>
          </View>

          {/* Steps */}
          {STEPS.map((s) => (
            <View key={s.key} style={styles.step}>
              <View style={styles.stepNum}>
                <Text style={styles.stepNumText}>{s.num}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.stepTitleRow}>
                  <Text style={styles.stepTitle}>{s.title}</Text>
                  <View style={[styles.badge, s.badge === 'PENDING' && styles.badgePending]}>
                    <Text style={[styles.badgeText, s.badge === 'PENDING' && styles.badgeTextPending]}>
                      {s.badge}
                    </Text>
                  </View>
                </View>
                <Text style={styles.stepSub}>{s.sub}</Text>
              </View>
            </View>
          ))}

          {/* Upload dropzone */}
          <View style={styles.dropzone}>
            <Ionicons name="cloud-upload-outline" size={30} color={colors.textSecondary} />
            <Text style={styles.dropTitle}>Upload Proof of Address</Text>
            <Text style={styles.dropSub}>PDF, JPG, PNG up to 5MB</Text>
            <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.85}>
              <Text style={styles.uploadText}>Upload Document</Text>
            </TouchableOpacity>
          </View>
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
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F6EC',
    borderRadius: radius.md,
    padding: 14,
    gap: 12,
    marginBottom: 20,
    marginTop: 6,
  },
  bannerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#1B9D4B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#1B9D4B',
    marginBottom: 2,
  },
  bannerSub: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#3E7A54',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: radius.md,
    padding: 14,
    gap: 14,
    marginBottom: 12,
  },
  stepNum: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
  stepTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  stepTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  badge: {
    backgroundColor: '#183D26',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: '#4ECB71',
    letterSpacing: 0.4,
  },
  badgePending: {
    backgroundColor: '#3D3218',
  },
  badgeTextPending: {
    color: '#E5B84E',
  },
  stepSub: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  dropzone: {
    borderWidth: 1.5,
    borderColor: '#3A3A3A',
    borderStyle: 'dashed',
    borderRadius: radius.lg,
    alignItems: 'center',
    paddingVertical: 28,
    marginTop: 10,
  },
  dropTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginTop: 12,
    marginBottom: 4,
  },
  dropSub: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
    marginBottom: 16,
  },
  uploadBtn: {
    borderWidth: 1,
    borderColor: '#4A4A4A',
    borderRadius: radius.sm,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  uploadText: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.text,
  },
});
