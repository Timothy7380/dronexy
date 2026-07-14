import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const FILTERS = ['All', 'Missions', 'Earnings', 'System'];

// Pilot "Notifications" — mission/earnings/system alerts with inline offer actions
export default function PilotNotificationsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markRead}>Mark all read</Text>
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
        <View style={styles.sectionBar}>
          <Text style={styles.sectionText}>TODAY</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="clipboard-outline" size={16} color={colors.white} />
          </View>
          <View style={styles.rowBody}>
            <View style={styles.rowTop}>
              <Text style={styles.rowTitle}>Mission Completed</Text>
              <Text style={styles.rowTime}>2h ago</Text>
            </View>
            <Text style={styles.rowSub}>Your report for Lekki Survey has been approved.</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="cash-outline" size={16} color={colors.white} />
          </View>
          <View style={styles.rowBody}>
            <View style={styles.rowTop}>
              <Text style={styles.rowTitle}>Earnings Withdrawn</Text>
              <Text style={styles.rowTime}>4h ago</Text>
            </View>
            <Text style={styles.rowSub}>$1,200.00 successfully sent to your bank account.</Text>
          </View>
        </View>

        {/* New mission with inline actions */}
        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="navigate-circle-outline" size={16} color={colors.white} />
          </View>
          <View style={styles.rowBody}>
            <View style={styles.rowTop}>
              <Text style={styles.rowTitle}>New Mission Assigned</Text>
              <Text style={styles.rowTime}>Today</Text>
            </View>
            <Text style={styles.rowSub}>Chevron facility scan in Victoria Island.</Text>
            <View style={styles.offerCard}>
              <View style={styles.offerHead}>
                <View style={styles.offerLogo}>
                  <Ionicons name="business" size={10} color="#7A7A7A" />
                </View>
                <Text style={styles.offerClient}>Chevron Nigeria</Text>
              </View>
              <Text style={styles.offerMeta}>Budget: $220 {'•'} 2.8 km away</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.declineBtn} activeOpacity={0.85}>
                <Text style={styles.declineText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.acceptBtn}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('MissionOffer')}
              >
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="warning-outline" size={16} color={colors.white} />
          </View>
          <View style={styles.rowBody}>
            <View style={styles.rowTop}>
              <Text style={styles.rowTitle}>System Alert</Text>
              <Text style={styles.rowTime}>Yesterday</Text>
            </View>
            <Text style={styles.rowSub}>Maintainance scheduled for Oct 12, 2:00 AM.</Text>
          </View>
        </View>
      </ScrollView>

      <PilotBottomNav active="home" navigation={navigation} />
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
  markRead: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 14,
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
  sectionBar: {
    backgroundColor: '#161616',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  sectionText: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.textSecondary,
    letterSpacing: 0.6,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
  },
  rowIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBody: {
    flex: 1,
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  rowTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  rowTime: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.textTertiary,
  },
  rowSub: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  offerCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: radius.sm,
    padding: 12,
    marginTop: 10,
  },
  offerHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  offerLogo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerClient: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.text,
  },
  offerMeta: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textSecondary,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  declineBtn: {
    flex: 1,
    height: 38,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineText: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.text,
  },
  acceptBtn: {
    flex: 1,
    height: 38,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.black,
  },
});
