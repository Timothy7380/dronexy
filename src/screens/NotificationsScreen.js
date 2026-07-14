import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const FILTERS = ['All', 'Missions', 'Payments', 'System'];

const TODAY = [
  {
    key: '1', icon: 'navigate-circle-outline', title: 'Mission Airborne', time: '2m ago',
    sub: 'Lekki Estate Survey drone is now on site and flying.',
  },
  {
    key: '2', icon: 'alert-circle-outline', title: 'Action Required', time: '1h ago',
    sub: 'Pending clearance for sector B-4. Tap to review.',
    quote: 'Pilot Oluwaseun A. has requested access to sec...',
    actions: true,
  },
  {
    key: '3', icon: 'card-outline', title: 'Payment Escrowed', time: '3h ago',
    sub: 'Invoice #DX-990 has been successfully funded.',
  },
];

const YESTERDAY = [
  {
    key: '4', icon: 'checkmark-circle-outline', title: 'Report Ready', time: 'Yesterday',
    sub: 'Your reports for Victoria Island Mapping are now ready.',
  },
  {
    key: '5', icon: 'person-add-outline', title: 'Pilot Assigned', time: 'Yesterday',
    sub: 'Adebayo T. has been assigned to your upcoming mission.',
  },
  {
    key: '6', icon: 'checkmark-circle-outline', title: 'Profile Verified', time: '2 days ago',
    sub: 'Your corporate billing profile has been verified.',
  },
];

function NotificationRow({ item }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Ionicons name={item.icon} size={17} color={colors.white} />
      </View>
      <View style={styles.rowBody}>
        <View style={styles.rowTop}>
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.rowTime}>{item.time}</Text>
        </View>
        <Text style={styles.rowSub}>{item.sub}</Text>
        {item.quote ? (
          <View style={styles.quote}>
            <Text style={styles.quoteText} numberOfLines={1}>{item.quote}</Text>
          </View>
        ) : null}
        {item.actions ? (
          <View style={styles.actions}>
            <TouchableOpacity style={styles.approveBtn} activeOpacity={0.85}>
              <Text style={styles.approveText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineBtn} activeOpacity={0.85}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
}

// "Notifications" — filterable feed grouped by day, with inline approve/decline
export default function NotificationsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 80 }}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={{ width: 80, alignItems: 'flex-end' }}>
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
        {TODAY.map((n) => <NotificationRow key={n.key} item={n} />)}

        <View style={styles.sectionBar}>
          <Text style={styles.sectionText}>YESTERDAY</Text>
        </View>
        {YESTERDAY.map((n) => <NotificationRow key={n.key} item={n} />)}
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
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
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
  quote: {
    backgroundColor: '#1C1C1E',
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
  },
  quoteText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  approveBtn: {
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  approveText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.black,
  },
  declineBtn: {
    backgroundColor: '#232323',
    borderRadius: radius.sm,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  declineText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.text,
  },
});
