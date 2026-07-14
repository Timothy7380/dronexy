import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const EVENTS = [
  { key: '1', icon: 'add-circle-outline', title: 'Mission Created', sub: 'Requested by Sarah J.', time: '09:00 AM' },
  { key: '2', icon: 'person-add-outline', title: 'Pilot Assigned', sub: 'Oluwaseun A. confirmed mission', time: '10:30 AM' },
  { key: '3', icon: 'shield-checkmark-outline', title: 'Payment Confirmed', sub: '$1,200 escrowed successfully', time: '10:32 AM' },
  { key: '4', icon: 'location-outline', title: 'Mission Started', sub: 'Drone on-site: Lekki Phase 1', time: '01:15 PM' },
  { key: '5', icon: 'navigate-outline', title: 'Drone Airborne', sub: 'Scanning sector B-4 (ETA: 45m)', time: '01:20 PM' },
  { key: '6', icon: 'document-text-outline', title: 'Report Uploaded', sub: 'PDF Report available for review', time: '03:45 PM', expandable: true },
];

// "Activity Feed" — timeline of one mission's events
export default function ActivityScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity Feed</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Mission header card */}
          <View style={styles.missionCard}>
            <View style={styles.thumb}>
              <Ionicons name="image-outline" size={18} color="#4A4A4A" />
            </View>
            <View>
              <Text style={styles.missionTitle}>Lekki Estate Survey</Text>
              <Text style={styles.missionId}>Mission ID: DX-7721</Text>
            </View>
          </View>

          {/* Timeline */}
          {EVENTS.map((e, i) => (
            <View key={e.key} style={styles.event}>
              <View style={styles.timelineCol}>
                <View style={styles.eventIcon}>
                  <Ionicons name={e.icon} size={15} color={colors.white} />
                </View>
                {i < EVENTS.length - 1 ? <View style={styles.timelineLine} /> : null}
              </View>
              <View style={styles.eventBody}>
                <View style={styles.eventTitleRow}>
                  <Text style={styles.eventTitle}>{e.title}</Text>
                  <Text style={styles.eventTime}>{e.time}</Text>
                </View>
                <Text style={styles.eventSub}>{e.sub}</Text>
                {e.expandable ? (
                  <TouchableOpacity style={styles.expandBtn} activeOpacity={0.8} onPress={() => navigation.navigate('Reports')}>
                    <Ionicons name="chevron-down" size={13} color={colors.text} />
                    <Text style={styles.expandText}>Tap to expand report details</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          ))}
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
  missionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: radius.md,
    padding: 12,
    gap: 12,
    marginBottom: 24,
  },
  thumb: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 2,
  },
  missionId: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textSecondary,
  },
  event: {
    flexDirection: 'row',
  },
  timelineCol: {
    alignItems: 'center',
    width: 36,
  },
  eventIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineLine: {
    flex: 1,
    width: 1.5,
    backgroundColor: '#2C2C2C',
    marginVertical: 4,
  },
  eventBody: {
    flex: 1,
    marginLeft: 12,
    paddingBottom: 26,
  },
  eventTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  eventTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  eventTime: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.textTertiary,
  },
  eventSub: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  expandBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1C1C1E',
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  expandText: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.text,
  },
});
