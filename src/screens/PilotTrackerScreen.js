import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const GREEN = '#35C759';

const CHECKLIST = [
  { key: '1', label: 'Pre-flight check', done: true },
  { key: '2', label: 'Launch drone', done: true },
  { key: '3', label: 'Complete coverage area', done: false },
  { key: '4', label: 'Land & secure', done: false },
];

// Pilot "Mission Tracker" — live flight view with route map, checklist, conditions.
// Drop the exported Figma map at assets/pilot-map.jpg and swap the hero below.
export default function PilotTrackerScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mission Tracker</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={19} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Route map hero */}
        <ImageBackground source={require('../../assets/pilot-map.png')} style={styles.hero} resizeMode="cover">
          <View style={styles.heroOverlay}>
            <Text style={styles.heroLine}>DRONE ROUTE 07: CENTRAL HUB TO SKYRISE WEST</Text>
            <Text style={styles.heroLine}>STATUS: ACTIVE</Text>
            <Text style={styles.heroLine}>DELIVERY ETA: 00:08:32</Text>
          </View>
        </ImageBackground>

        <View style={styles.inner}>
          <Text style={styles.title}>Eko Atlantic Mapping</Text>
          <Text style={styles.subtitle}>South Sector B-12</Text>

          {/* Checklist */}
          <View style={styles.checklist}>
            {CHECKLIST.map((c) => (
              <View key={c.key} style={styles.checkRow}>
                {c.done ? (
                  <Ionicons name="checkmark" size={16} color={colors.white} />
                ) : (
                  <View style={styles.checkbox} />
                )}
                <Text style={[styles.checkLabel, !c.done && { color: colors.textSecondary }]}>
                  {c.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Conditions */}
          <View style={styles.conditions}>
            <View style={styles.condition}>
              <Ionicons name="speedometer-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.conditionText}>14 km/h</Text>
            </View>
            <View style={styles.condition}>
              <Ionicons name="thermometer-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.conditionText}>31{'°'}C</Text>
            </View>
            <View style={styles.condition}>
              <Ionicons name="eye-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.conditionText}>Visibility: Good</Text>
            </View>
          </View>

          <Text style={styles.eta}>Est. completion 4:15 PM</Text>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.primaryBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('MissionWorkspace')}
            >
              <Text style={styles.primaryText}>Upload Media</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('PilotMessages')}
            >
              <Text style={styles.secondaryText}>Contact Client</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.sos}>Report an Issue / SOS</Text>
          </TouchableOpacity>
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
  headerRow: {
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
  hero: {
    height: 300,
    backgroundColor: '#0A140C',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 10,
    left: 12,
  },
  heroLine: {
    fontFamily: fonts.bold,
    fontSize: 8,
    color: GREEN,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  heroCenter: {
    alignItems: 'center',
  },
  inner: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
    marginBottom: 3,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 18,
  },
  checklist: {
    gap: 14,
    marginBottom: 20,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#4A4A4A',
  },
  checkLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },
  conditions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  condition: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  conditionText: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.text,
  },
  eta: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    marginBottom: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  primaryBtn: {
    flex: 1,
    height: 46,
    borderRadius: radius.md,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  secondaryBtn: {
    flex: 1,
    height: 46,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  sos: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
});
