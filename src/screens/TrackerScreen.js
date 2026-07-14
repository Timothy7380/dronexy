import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const STEPS = ['Assigned', 'En Route', 'On Site', 'Complete'];
const ACTIVE_STEP = 2; // "On Site"

// "Mission Tracker" — live mission status with map hero, pilot card, stats and stepper.
// Drop the exported Figma map image at assets/tracker-map.jpg and swap the hero below.
export default function TrackerScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        {/* Map hero with overlaid header */}
        <ImageBackground source={require('../../assets/tracker-map.png')} style={styles.hero} resizeMode="cover">
          <View style={styles.heroHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Mission Tracker</Text>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={18} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.heroCenter} />
        </ImageBackground>

        <View style={styles.inner}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Lekki Estate Survey</Text>
            <Text style={styles.statusChip}>IN PROGRESS</Text>
          </View>

          {/* Pilot card */}
          <View style={styles.pilotCard}>
            <View style={styles.pilotAvatar}>
              <Ionicons name="person" size={18} color="#7A7A7A" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.pilotName}>Oluwaseun A.</Text>
              <Text style={styles.pilotRole}>Certified Drone Pilot</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
              <Ionicons name="chatbubble-outline" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statTile}>
              <View style={styles.statLabelRow}>
                <Ionicons name="time-outline" size={12} color={colors.textTertiary} />
                <Text style={styles.statLabel}>EST. COMPLETION</Text>
              </View>
              <Text style={styles.statValue}>3:45 PM</Text>
            </View>
            <View style={styles.statTile}>
              <View style={styles.statLabelRow}>
                <Ionicons name="flag-outline" size={12} color={colors.textTertiary} />
                <Text style={styles.statLabel}>WIND SPEED</Text>
              </View>
              <Text style={styles.statValue}>12 km/h</Text>
            </View>
          </View>

          {/* Stepper */}
          <Text style={styles.sectionTitle}>Mission Status</Text>
          <View style={styles.stepperTrack}>
            {STEPS.map((s, i) => (
              <View key={s} style={[styles.stepSegment, i <= ACTIVE_STEP && styles.stepSegmentDone]} />
            ))}
          </View>
          <View style={styles.stepLabels}>
            {STEPS.map((s, i) => (
              <Text key={s} style={[styles.stepLabel, i === ACTIVE_STEP && styles.stepLabelActive]}>
                {s}
              </Text>
            ))}
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionBtn} activeOpacity={0.85}>
              <Text style={styles.actionText}>Contact Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Reports')}
            >
              <Text style={styles.actionText}>View Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNav active="home" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  hero: {
    height: 250,
    backgroundColor: '#0A1420',
    justifyContent: 'space-between',
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  heroCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetRing: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.7)',
    backgroundColor: 'rgba(13,13,13,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
  },
  statusChip: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
    letterSpacing: 0.4,
  },
  pilotCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 14,
    marginBottom: 14,
    gap: 12,
  },
  pilotAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pilotName: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  pilotRole: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 22,
  },
  statTile: {
    flex: 1,
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
  },
  statLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 6,
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 9.5,
    color: colors.textTertiary,
    letterSpacing: 0.4,
  },
  statValue: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 14,
  },
  stepperTrack: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 8,
  },
  stepSegment: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#2C2C2C',
  },
  stepSegmentDone: {
    backgroundColor: colors.white,
  },
  stepLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  stepLabel: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.textTertiary,
  },
  stepLabelActive: {
    fontFamily: fonts.bold,
    color: colors.text,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    height: 46,
    borderRadius: radius.md,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
});
