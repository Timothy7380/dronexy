import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';
import PrimaryButton from '../components/PrimaryButton';

const GREEN = '#35C759';

const HOURS = [
  { key: 'weekday', day: 'Mon-Fri', time: '7:00 AM - 7:00 PM' },
  { key: 'sat', day: 'Sat', time: '8:00 AM - 4:00 PM' },
  { key: 'sun', day: 'Sun', time: 'Unavailable' },
];

const SERVICE_TYPES = ['Aerial Photography', 'Mapping & Survey', 'Infrastructure Inspection', 'Delivery'];

// Pilot "Availability" — online status, working hours, mission radius, service types
export default function AvailabilityScreen({ navigation }) {
  const [online, setOnline] = useState(true);
  const [services, setServices] = useState({
    'Aerial Photography': true,
    'Mapping & Survey': true,
    'Infrastructure Inspection': true,
    Delivery: false,
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          <Text style={styles.headerTitle}>Availability</Text>

          {/* Online card */}
          <View style={styles.onlineCard}>
            <View>
              <Text style={styles.onlineTitle}>You are {online ? 'ONLINE' : 'OFFLINE'}</Text>
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
          </View>

          {/* Working hours */}
          <Text style={styles.sectionTitle}>Working Hours</Text>
          {HOURS.map((h) => (
            <TouchableOpacity key={h.key} style={styles.hourRow} activeOpacity={0.7}>
              <View>
                <Text style={styles.hourDay}>{h.day}</Text>
                <Text style={styles.hourTime}>{h.time}</Text>
              </View>
              <Ionicons name="chevron-forward" size={15} color={colors.textTertiary} />
            </TouchableOpacity>
          ))}

          {/* Mission radius */}
          <Text style={styles.sectionTitle}>Mission Radius</Text>
          <View style={styles.radiusCard}>
            <View style={styles.radiusMap}>
              <Ionicons name="map-outline" size={20} color="#4A4A4A" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.radiusValue}>25 km radius</Text>
              <View style={styles.sliderTrack}>
                <View style={styles.sliderThumb} />
                <View style={styles.sliderFill} />
              </View>
            </View>
          </View>

          {/* Service types */}
          <Text style={styles.sectionTitle}>Service Types</Text>
          {SERVICE_TYPES.map((s) => (
            <View key={s} style={styles.serviceRow}>
              <Text style={styles.serviceText}>{s}</Text>
              <Switch
                value={services[s]}
                onValueChange={(v) => setServices({ ...services, [s]: v })}
                trackColor={{ true: GREEN, false: '#2C2C2C' }}
                thumbColor="#FFFFFF"
              />
            </View>
          ))}

          <PrimaryButton label="Save Settings" style={{ marginTop: 20 }} onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>

      <PilotBottomNav active="live" navigation={navigation} />
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
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.text,
    paddingVertical: 14,
  },
  onlineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 10,
  },
  onlineTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    marginBottom: 3,
  },
  onlineSub: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginTop: 18,
    marginBottom: 10,
  },
  hourRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  hourDay: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 2,
  },
  hourTime: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  radiusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    gap: 14,
  },
  radiusMap: {
    width: 52,
    height: 52,
    borderRadius: radius.sm,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radiusValue: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 10,
  },
  sliderTrack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sliderThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2C2C2C',
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  sliderFill: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  serviceText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
});
