import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';

// "Privacy & Security" — dark settings hub: security, privacy, permissions, danger zone
function Toggle({ value, onChange }) {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ true: '#FFFFFF', false: '#3A3A3A' }}
      thumbColor={value ? '#0D0D0D' : '#FFFFFF'}
      ios_backgroundColor="#3A3A3A"
    />
  );
}

function Row({ icon, title, sub, danger, right, onPress }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={onPress} disabled={!onPress}>
      <View style={[styles.rowIcon, danger && styles.rowIconDanger]}>
        <Ionicons name={icon} size={17} color={danger ? colors.danger : colors.white} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.rowTitle, danger && { color: colors.danger }]}>{title}</Text>
        {sub ? <Text style={[styles.rowSub, danger && { color: colors.danger, opacity: 0.85 }]}>{sub}</Text> : null}
      </View>
      {right}
    </TouchableOpacity>
  );
}

export default function PrivacySecurityScreen({ navigation }) {
  const [twoFA, setTwoFA] = useState(true);
  const [biometric, setBiometric] = useState(true);
  const [analytics, setAnalytics] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.sectionTitle}>SECURITY</Text>
        <Row icon="shield-checkmark-outline" title="Two-Factor Authentication" sub="2FA is enabled"
          right={<Toggle value={twoFA} onChange={setTwoFA} />} />
        <Row icon="finger-print-outline" title="Biometric Login" sub="Use Face ID or fingerprint"
          right={<Toggle value={biometric} onChange={setBiometric} />} />
        <Row icon="desktop-outline" title="Active Sessions" sub="2 devices logged in" onPress={() => {}} />
        <Row icon="key-outline" title="Change Password" sub="Last changed 3 months ago"
          onPress={() => navigation.navigate('ChangePassword')} />

        <Text style={styles.sectionTitle}>PRIVACY</Text>
        <Row icon="eye-outline" title="Profile Visibility" sub="Public" onPress={() => {}} />
        <Row icon="bar-chart-outline" title="Analytics & Crash Reports" sub="Help improve the app"
          right={<Toggle value={analytics} onChange={setAnalytics} />} />
        <Row icon="download-outline" title="Download My Data" sub="Export a copy of your data" onPress={() => {}} />
        <Row icon="time-outline" title="Activity Log" sub="See your recent activity"
          onPress={() => navigation.navigate('Activity')} />

        <Text style={styles.sectionTitle}>DATA & PERMISSIONS</Text>
        <Row icon="location-outline" title="Location Access" sub="Always - Required for missions" onPress={() => {}} />
        <Row icon="camera-outline" title="Camera" sub="For document and photo upload" onPress={() => {}} />
        <Row icon="notifications-outline" title="Notifications" sub="Enabled"
          onPress={() => navigation.navigate('Notifications')} />

        <Text style={styles.sectionTitle}>DANGER ZONE</Text>
        <Row icon="trash-outline" title="Delete Account" sub="Permanently remove all your data" danger onPress={() => {}} />
        <Row icon="remove-circle-outline" title="Deactivate Account" sub="Temporarily suspend your account" danger onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingVertical: 12,
  },
  headerSide: { width: 32 },
  headerTitle: { fontFamily: fonts.bold, fontSize: 17, color: colors.text },
  sectionTitle: {
    fontFamily: fonts.bold, fontSize: 11, color: colors.textTertiary,
    letterSpacing: 0.8, paddingHorizontal: 20, paddingTop: 22, paddingBottom: 10,
  },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    paddingHorizontal: 20, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: '#1A1A1A',
  },
  rowIcon: {
    width: 38, height: 38, borderRadius: 10, backgroundColor: '#1C1C1E',
    alignItems: 'center', justifyContent: 'center',
  },
  rowIconDanger: { backgroundColor: 'rgba(229,72,77,0.12)' },
  rowTitle: { fontFamily: fonts.bold, fontSize: 14.5, color: colors.text, marginBottom: 2 },
  rowSub: { fontFamily: fonts.regular, fontSize: 12, color: colors.textSecondary },
});
