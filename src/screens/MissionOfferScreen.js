import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

const DETAILS = [
  { key: '1', label: 'Type', value: 'Real Estate Video' },
  { key: '2', label: 'Location', value: 'Central Business District, Abuja' },
  { key: '3', label: 'Date & Time', value: 'Jun 18, 2026 • 10:00 AM' },
  { key: '4', label: 'Duration', value: '~3 Hours' },
  { key: '5', label: 'Equipment', value: '4K Camera + ND Filters' },
];

// "Mission Offer" — payout, details, client notes, accept/decline
export default function MissionOfferScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mission Offer</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          <Text style={styles.label}>Mission Title</Text>
          <Text style={styles.title}>Aerial Photography {'–'} Abuja CBD</Text>

          <Text style={styles.label}>Offered Payout</Text>
          <View style={styles.payoutRow}>
            <Text style={styles.payout}>{'₦'}85,000</Text>
            <View style={styles.clientChip}>
              <Text style={styles.clientChipText}>Nexus Realty Ltd</Text>
            </View>
          </View>
          <View style={styles.deadlineRow}>
            <Ionicons name="time-outline" size={13} color={colors.textSecondary} />
            <Text style={styles.deadline}>Accept by Jun 15, 2026</Text>
          </View>

          {/* Details card */}
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>MISSION DETAILS</Text>
            {DETAILS.map((d) => (
              <View key={d.key} style={styles.detailRow}>
                <Text style={styles.detailLabel}>{d.label}</Text>
                <Text style={styles.detailValue}>{d.value}</Text>
              </View>
            ))}
          </View>

          {/* Client notes */}
          <Text style={styles.notesTitle}>Client Notes</Text>
          <View style={styles.notesCard}>
            <Text style={styles.notesText}>
              We need high-angle shots of the new commercial tower. Prefer sunrise lighting if
              possible. Multiple passes over the plaza area.
            </Text>
          </View>

          {/* Actions */}
          <TouchableOpacity
            style={styles.acceptBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('PilotMissions')}
          >
            <Text style={styles.acceptText}>Accept Mission</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.declineBtn}
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  inner: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.text,
    marginBottom: 18,
    lineHeight: 29,
  },
  payoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  payout: {
    fontFamily: fonts.black,
    fontSize: 28,
    color: colors.text,
  },
  clientChip: {
    backgroundColor: '#2C2C2C',
    borderRadius: radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  clientChipText: {
    fontFamily: fonts.bold,
    fontSize: 10.5,
    color: colors.text,
  },
  deadlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 22,
  },
  deadline: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  detailsCard: {
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 20,
  },
  detailsTitle: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.textTertiary,
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  detailValue: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    flex: 1,
    textAlign: 'right',
    marginLeft: 20,
  },
  notesTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 10,
  },
  notesCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 26,
  },
  notesText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  acceptBtn: {
    height: 52,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  acceptText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.black,
  },
  declineBtn: {
    height: 52,
    borderRadius: radius.pill,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
  },
});
