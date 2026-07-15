import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const MENU = [
  { key: 'account', icon: 'person-outline', title: 'Account Settings', sub: 'Personal info, verification, password', route: 'AccountSettings' },
  { key: 'payments', icon: 'card-outline', title: 'Payment Methods', sub: 'Visa •••• 8472, Invoices', route: 'PaymentMethods' },
  { key: 'notifs', icon: 'notifications-outline', title: 'Notification Preferences', sub: 'Push, Email, SMS alerts', route: 'Notifications' },
  { key: 'privacy', icon: 'shield-outline', title: 'Privacy & Security', sub: '2FA, biometrics, permissions', route: 'PrivacySecurity' },
  { key: 'help', icon: 'help-circle-outline', title: 'Help & Support', sub: 'Help center, chat with us', route: 'HelpSupport' },
  { key: 'legal', icon: 'document-text-outline', title: 'Legal', sub: 'Terms of service, privacy policy', route: 'Legal' },
];

const STATS = [
  { key: '1', value: '16', label: 'TOTAL MISSIONS' },
  { key: '2', value: '2', label: 'ACTIVE' },
  { key: '3', value: '$4.8k', label: 'TOTAL SPENT' },
];

// "My Profile" — avatar, stats, settings menu, logout
export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerSide} />
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="options-outline" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Identity */}
          <View style={styles.identity}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={34} color="#7A7A7A" />
            </View>
            <Text style={styles.name}>Rachael Ayeni</Text>
            <View style={styles.memberRow}>
              <Text style={styles.member}>Member since Oct 2024</Text>
              <View style={styles.locationChip}>
                <Text style={styles.locationText}>LAGOS, NG</Text>
              </View>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            {STATS.map((s) => (
              <View key={s.key} style={styles.statTile}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Menu */}
          {MENU.map((m) => (
            <TouchableOpacity
              key={m.key}
              style={styles.menuRow}
              activeOpacity={0.8}
              onPress={() => m.route && navigation.navigate(m.route)}
            >
              <View style={styles.menuIcon}>
                <Ionicons name={m.icon} size={17} color={colors.white} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.menuTitle}>{m.title}</Text>
                {m.sub ? <Text style={styles.menuSub}>{m.sub}</Text> : null}
              </View>
              <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} />
            </TouchableOpacity>
          ))}

          {/* Logout */}
          <TouchableOpacity
            style={styles.logout}
            activeOpacity={0.85}
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'GetStarted' }] })}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav active="profile" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerSide: {
    width: 32,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  inner: {
    paddingHorizontal: 20,
  },
  identity: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  name: {
    fontFamily: fonts.black,
    fontSize: 22,
    color: colors.text,
    marginBottom: 6,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  member: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  locationChip: {
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  locationText: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.black,
    letterSpacing: 0.4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statTile: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    borderRadius: radius.md,
    padding: 14,
  },
  statValue: {
    fontFamily: fonts.black,
    fontSize: 20,
    color: colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 8.5,
    color: colors.textTertiary,
    letterSpacing: 0.4,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
    gap: 12,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 2,
  },
  menuSub: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
  },
  logout: {
    height: 50,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  logoutText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
});
