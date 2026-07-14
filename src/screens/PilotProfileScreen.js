import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const GREEN = '#35C759';

const MENU = [
  { key: 'licenses', title: 'Licenses & Certifications', sub: 'Part 107 Pilot License', chip: 'Exp: Oct 2026', chipColor: '#E5484D', route: 'UploadCredentials' },
  { key: 'insurance', title: 'Insurance Documents', sub: 'Active Liability Coverage', chip: 'Active', chipColor: GREEN },
  { key: 'fleet', title: 'Drone Fleet', sub: 'DJI Mavic 3, Matrice 300 RTK' },
  { key: 'account', title: 'Account Settings', sub: 'Profile, Security, Email', route: 'AccountSettings' },
  { key: 'payment', title: 'Payment Info', sub: 'Bank details & Payout method', route: 'PaymentMethods' },
  { key: 'help', title: 'Help & Support', sub: 'FAQs, Contact, Live Chat' },
  { key: 'legal', title: 'Legal', sub: 'Terms, Privacy, Safety Guidelines' },
];

// Pilot "Profile" — verified pilot identity, stats, compliance, menu, logout
export default function PilotProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Identity */}
          <View style={styles.identity}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={34} color="#7A7A7A" />
            </View>
            <Text style={styles.name}>James Adeyemi</Text>
            <View style={styles.metaRow}>
              <View style={styles.verifiedChip}>
                <Text style={styles.verifiedText}>VERIFIED PILOT</Text>
              </View>
              <Text style={styles.location}>Lagos, Nigeria</Text>
            </View>
            <Text style={styles.member}>Member since Mar 2023</Text>
          </View>

          {/* Stats */}
          <TouchableOpacity
            style={styles.statsRow}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Performance')}
          >
            <View style={styles.stat}>
              <Text style={styles.statValue}>28</Text>
              <Text style={styles.statLabel}>Missions</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>4.9{'★'}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>142</Text>
              <Text style={styles.statLabel}>Flight Hrs</Text>
            </View>
          </TouchableOpacity>

          {/* Compliance card */}
          <View style={styles.compliance}>
            <View style={styles.complianceHead}>
              <Text style={styles.complianceTitle}>Documents & Compliance</Text>
              <Ionicons name="shield-checkmark-outline" size={18} color={GREEN} />
            </View>
            <View style={styles.complianceTrack}>
              <View style={styles.complianceFill} />
            </View>
            <Text style={styles.complianceSub}>
              2 of 3 safety documents are current. 1 renewal needed soon.
            </Text>
          </View>

          {/* Menu */}
          {MENU.map((m) => (
            <TouchableOpacity
              key={m.key}
              style={styles.menuRow}
              activeOpacity={0.8}
              onPress={() => m.route && navigation.navigate(m.route)}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.menuTitleRow}>
                  <Text style={styles.menuTitle}>{m.title}</Text>
                  {m.chip ? (
                    <View style={[styles.menuChip, { backgroundColor: `${m.chipColor}22` }]}>
                      <Text style={[styles.menuChipText, { color: m.chipColor }]}>{m.chip}</Text>
                    </View>
                  ) : null}
                </View>
                <Text style={styles.menuSub}>{m.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={15} color={colors.textTertiary} />
            </TouchableOpacity>
          ))}

          {/* Logout */}
          <TouchableOpacity
            style={styles.logout}
            activeOpacity={0.85}
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'GetStarted' }] })}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <PilotBottomNav active="profile" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  inner: {
    paddingHorizontal: 20,
  },
  identity: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  verifiedChip: {
    backgroundColor: '#242424',
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  verifiedText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: colors.text,
    letterSpacing: 0.5,
  },
  location: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  member: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    paddingVertical: 16,
    marginBottom: 14,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontFamily: fonts.black,
    fontSize: 18,
    color: colors.text,
    marginBottom: 3,
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
  },
  statDivider: {
    width: 1,
    height: 26,
    backgroundColor: '#2A2A2A',
  },
  compliance: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 10,
  },
  complianceHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  complianceTitle: {
    fontFamily: fonts.bold,
    fontSize: 14.5,
    color: colors.text,
  },
  complianceTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2C2C2C',
    marginBottom: 10,
  },
  complianceFill: {
    width: '66%',
    height: 5,
    borderRadius: 3,
    backgroundColor: GREEN,
  },
  complianceSub: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textSecondary,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
    gap: 10,
  },
  menuTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  menuTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  menuChip: {
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  menuChipText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    letterSpacing: 0.4,
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
    borderColor: '#3A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  logoutText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#E5484D',
  },
});
