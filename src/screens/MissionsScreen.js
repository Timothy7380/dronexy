import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const FILTERS = ['All', 'Active', 'Pending', 'Completed', 'Cancelled'];

const MISSIONS = [
  { key: '1', title: 'Lekki Estate Survey', pilot: 'Oluwaseun A.', rating: '4.9', progress: 0.65, pct: '65%' },
  { key: '2', title: 'Ikeja Logistics Monitoring', pilot: 'Eniola C.', rating: '4.9', progress: 0.2, pct: '20%' },
  { key: '3', title: 'Farm Thermal Analysis', pilot: 'Miracle A.', rating: '4.9', progress: 0.95, pct: '95%' },
];

function MissionCard({ mission, navigation }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{mission.title}</Text>
      <View style={styles.pilotRow}>
        <View style={styles.pilotAvatar}>
          <Ionicons name="person" size={9} color="#7A7A7A" />
        </View>
        <Text style={styles.pilotName}>
          {mission.pilot} {'•'} {mission.rating} {'★'}
        </Text>
        <Text style={styles.status}>IN PROGRESS</Text>
      </View>

      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>Mission Progress</Text>
        <Text style={styles.progressPct}>{mission.pct}</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${mission.progress * 100}%` }]} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.trackBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Tracker')}
        >
          <Text style={styles.trackText}>Track</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.msgBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Messages')}
        >
          <Text style={styles.msgText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// "My Missions" — filter chips + mission cards with progress and Track/Message actions
export default function MissionsScreen({ navigation }) {
  const [filter, setFilter] = useState('Active');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Missions</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="options-outline" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsScroll}
        contentContainerStyle={styles.chips}
      >
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.chip, filter === f && styles.chipActive]}
            onPress={() => setFilter(f)}
          >
            <Text style={[styles.chipText, filter === f && styles.chipTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {MISSIONS.map((m) => (
            <MissionCard key={m.key} mission={m} navigation={navigation} />
          ))}
        </View>
      </ScrollView>

      <BottomNav active="missions" navigation={navigation} />
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
  chipsScroll: {
    flexGrow: 0,
  },
  chips: {
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 16,
  },
  chip: {
    backgroundColor: '#1E1E1E',
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: colors.white,
  },
  chipText: {
    fontFamily: fonts.regular,
    fontSize: 13,
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
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
  },
  pilotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  pilotAvatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  pilotName: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    flex: 1,
  },
  status: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.white,
    letterSpacing: 0.4,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
  },
  progressPct: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.text,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2C2C2C',
    marginBottom: 16,
  },
  progressFill: {
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  trackBtn: {
    flex: 1,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.black,
  },
  msgBtn: {
    flex: 1,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
});
