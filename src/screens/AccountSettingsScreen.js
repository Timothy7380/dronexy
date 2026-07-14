import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

// "Account Settings" — light-themed settings hub with black header (matches Figma)
const SECTIONS = [
  {
    title: 'PROFILE',
    rows: [
      { key: 'personal', icon: 'person-outline', title: 'Personal Information', sub: 'Name, email, phone, address', route: 'PersonalInformation' },
      { key: 'identity', icon: 'shield-outline', title: 'Identity Verification', sub: 'Verify your ID to unlock all features', route: 'IdentityVerification', badge: 'VERIFIED' },
    ],
  },
  {
    title: 'SECURITY',
    rows: [
      { key: 'password', icon: 'lock-closed-outline', title: 'Change Password', sub: 'Last changed 3 months ago', route: 'ChangePassword' },
      { key: '2fa', icon: 'keypad-outline', title: 'Two-Factor Authentication', sub: '2FA enabled', toggle: true },
    ],
  },
  {
    title: 'ACCOUNT',
    rows: [
      { key: 'language', icon: 'globe-outline', title: 'Language', sub: 'English' },
      { key: 'region', icon: 'location-outline', title: 'Location & Region', sub: 'Lagos, NG' },
      { key: 'deactivate', icon: 'notifications-off-outline', title: 'Deactivate Account', sub: 'Temporarily disable your account' },
      { key: 'delete', icon: 'trash-outline', title: 'Delete Account', sub: 'Permanently delete your account', danger: true },
    ],
  },
];

export default function AccountSettingsScreen({ navigation }) {
  const [tfa, setTfa] = useState(true);

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.headerSafe} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
            <Ionicons name="arrow-back" size={22} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Account Settings</Text>
          <View style={styles.headerSide} />
        </View>
      </SafeAreaView>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {SECTIONS.map((section) => (
          <View key={section.title}>
            <View style={styles.sectionBar}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            {section.rows.map((row) => (
              <TouchableOpacity
                key={row.key}
                style={styles.row}
                activeOpacity={0.7}
                onPress={() => row.route && navigation.navigate(row.route)}
              >
                <View style={styles.rowIcon}>
                  <Ionicons name={row.icon} size={17} color="#FFFFFF" />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.rowTitleRow}>
                    <Text style={[styles.rowTitle, row.danger && { color: colors.danger }]}>{row.title}</Text>
                    {row.badge ? (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{row.badge}</Text>
                      </View>
                    ) : null}
                  </View>
                  <Text style={styles.rowSub}>{row.sub}</Text>
                </View>
                {row.toggle ? (
                  <Switch
                    value={tfa}
                    onValueChange={setTfa}
                    trackColor={{ true: '#111111', false: '#D0D0D0' }}
                    thumbColor="#FFFFFF"
                  />
                ) : (
                  <Ionicons name="chevron-forward" size={16} color="#B5B5B5" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerSafe: {
    backgroundColor: '#0D0D0D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerSide: {
    width: 32,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: '#FFFFFF',
  },
  body: {
    flex: 1,
  },
  sectionBar: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: '#8A8A8A',
    letterSpacing: 0.8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    gap: 14,
  },
  rowIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  rowTitle: {
    fontFamily: fonts.bold,
    fontSize: 14.5,
    color: '#111111',
  },
  rowSub: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#8A8A8A',
  },
  badge: {
    backgroundColor: '#E7F6EC',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: '#1B9D4B',
    letterSpacing: 0.4,
  },
});
