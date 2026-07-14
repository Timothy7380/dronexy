import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const FILTERS = ['All', 'Assigned', 'Active', 'Completed'];

// Pilot "My Missions" — offers, in-progress, completed
export default function PilotMissionsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Missions</Text>
        <TouchableOpacity>
          <Ionicons name="funnel-outline" size={18} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.chips}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.chip, filter === f && styles.chipActive]}
            onPress={() => setFilter(f)}
          >
            <Text style={[styles.chipText, filter === f && styles.chipTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* New offer */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('MissionOffer')}
          >
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Lekki Real Estate Shoot</Text>
              <Text style={styles.payout}>$220</Text>
            </View>
            <View style={styles.clientRow}>
              <View style={styles.clientLogo}>
                <Ionicons name="business" size={11} color="#7A7A7A" />
              </View>
              <Text style={styles.clientName}>Lekki Properties Ltd</Text>
            </View>
            <Text style={styles.meta}>4.2 km  •  Jun 20 · 9:00 AM</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.declineBtn} activeOpacity={0.85}>
                <Text style={styles.declineText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptBtn} activeOpacity={0.85}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* In progress */}
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Eko Atlantic Mapping</Text>
              <Text style={styles.statusText}>IN PROGRESS</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '65%' }]} />
            </View>
            <Text style={styles.meta}>65% coverage complete</Text>
            <TouchableOpacity
              style={styles.continueBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('MissionWorkspace')}
            >
              <Text style={styles.acceptText}>Continue Mission</Text>
            </TouchableOpacity>
          </View>

          {/* Completed */}
          <View style={[styles.card, styles.completedCard]}>
            <View style={styles.thumb}>
              <Ionicons name="image-outline" size={18} color="#4A4A4A" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Ikoyi Bridge Survey</Text>
              <View style={styles.completedRow}>
                <View style={styles.completedChip}>
                  <Text style={styles.completedChipText}>COMPLETED</Text>
                </View>
                <Text style={styles.meta}>Yesterday</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MissionReport')}>
              <Text style={styles.viewLink}>View</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.moreRow}>
            <Text style={styles.moreText}>3 more pending jobs</Text>
            <Ionicons name="arrow-forward" size={14} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <PilotBottomNav active="missions" navigation={navigation} />
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
    paddingVertical: 14,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.text,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  chip: {
    backgroundColor: '#1E1E1E',
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: colors.white,
  },
  chipText: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  chipTextActive: {
    fontFamily: fonts.bold,
    color: colors.black,
  },
  inner: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 14,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
  },
  payout: {
    fontFamily: fonts.black,
    fontSize: 15,
    color: colors.text,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  clientLogo: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientName: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  meta: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  declineBtn: {
    flex: 1,
    height: 40,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
  acceptBtn: {
    flex: 1,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.black,
  },
  statusText: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.white,
    letterSpacing: 0.5,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2C2C2C',
    marginBottom: 8,
  },
  progressFill: {
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  continueBtn: {
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumb: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  completedChip: {
    backgroundColor: '#242424',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  completedChipText: {
    fontFamily: fonts.black,
    fontSize: 8,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  viewLink: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    textDecorationLine: 'underline',
  },
  moreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  moreText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
});
