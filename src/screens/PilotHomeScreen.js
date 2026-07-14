import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const GREEN = '#35C759';

const STATS = [
  { key: '1', value: '1', label: 'ACTIVE' },
  { key: '2', value: '3', label: 'PENDING' },
  { key: '3', value: '28', label: 'DONE' },
  { key: '4', value: '142', label: 'HRS' },
];

const JOBS = [
  { key: '1', title: 'Victoria Island Aerial Survey', client: 'Chevron Nigeria', meta: '$180 • 2.8 km away', priority: 'HIGH' },
  { key: '2', title: 'Chevron Facility Scan', client: 'Chevron Nigeria', meta: '$210 • 2.8 km away', priority: 'NORMAL' },
];

// Pilot Home — greeting, online toggle, stat tiles, assigned jobs with Accept/Decline
export default function PilotHomeScreen({ navigation }) {
  const [online, setOnline] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={16} color="#7A7A7A" />
              </View>
              <Text style={styles.greeting}>Good morning, Temitope</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={() => navigation.navigate('PilotNotifications')}>
                <Ionicons name="notifications-outline" size={21} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PilotMessages')}>
                <Ionicons name="chatbubble-ellipses-outline" size={21} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Online toggle */}
          <TouchableOpacity
            style={styles.onlineCard}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Availability')}
          >
            <View>
              <Text style={styles.onlineTitle}>{online ? 'Online' : 'Offline'}</Text>
              <Text style={styles.onlineSub}>
                {online ? 'You are visible to clients' : 'Clients cannot see you'}
              </Text>
            </View>
            <Switch
              value={online}
              onValueChange={setOnline}
              trackColor={{ true: GREEN, false: '#2C2C2C' }}
              thumbColor="#FFFFFF"
            />
          </TouchableOpacity>

          {/* Stats */}
          <View style={styles.statsRow}>
            {STATS.map((s) => (
              <View key={s.key} style={styles.statTile}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Assigned jobs */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Assigned to You</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PilotMissions')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {JOBS.map((job) => (
            <TouchableOpacity
              key={job.key}
              style={styles.jobCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('MissionOffer')}
            >
              <View style={styles.jobTitleRow}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={[styles.priority, job.priority === 'HIGH' && { color: '#E5B84E' }]}>
                  {job.priority}
                </Text>
              </View>
              <View style={styles.clientRow}>
                <View style={styles.clientLogo}>
                  <Ionicons name="business" size={12} color="#7A7A7A" />
                </View>
                <View>
                  <Text style={styles.clientName}>{job.client}</Text>
                  <Text style={styles.jobMeta}>{job.meta}</Text>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.declineBtn} activeOpacity={0.85}>
                  <Text style={styles.declineText}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.acceptBtn}
                  activeOpacity={0.85}
                  onPress={() => navigation.navigate('PilotMissions')}
                >
                  <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
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
  inner: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  onlineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 16,
  },
  onlineTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 3,
  },
  onlineSub: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statTile: {
    flex: 1,
    backgroundColor: '#161616',
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  statValue: {
    fontFamily: fonts.black,
    fontSize: 18,
    color: colors.text,
    marginBottom: 3,
  },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 8.5,
    color: colors.textTertiary,
    letterSpacing: 0.5,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  viewAll: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  jobCard: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 14,
  },
  jobTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  jobTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  priority: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  clientLogo: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientName: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
  jobMeta: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
    marginTop: 2,
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
});
