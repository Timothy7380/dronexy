import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const BARS = [
  { star: '5★', width: '88%' },
  { star: '4★', width: '9%' },
  { star: '3★', width: '2%' },
  { star: '2★', width: '1%' },
  { star: '1★', width: '0%' },
];

const REVIEWS = [
  { key: '1', name: 'John Sarah', text: '"Exceptional precision in mapping. The deliverables were flawless."', time: 'Jun 12' },
  { key: '2', name: 'Adebayo K.', text: '"Great communication throughout the mission. Highly recommended."', time: 'Jun 8' },
];

// Pilot "Performance" — rating summary, star distribution, reviews, improvement tip
export default function PerformanceScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Performance</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Rating summary */}
          <View style={styles.summary}>
            <Text style={styles.rating}>4.9 <Text style={styles.star}>{'★'}</Text></Text>
            <View style={styles.topRated}>
              <Text style={styles.topRatedText}>Top Rated Pilot</Text>
            </View>
            <Text style={styles.basedOn}>Based on 142 reviews</Text>
          </View>

          {/* Stat tiles */}
          <View style={styles.tiles}>
            <View style={styles.tile}>
              <Text style={styles.tileValue}>98%</Text>
              <Text style={styles.tileLabel}>RESPONSE RATE</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileValue}>96%</Text>
              <Text style={styles.tileLabel}>ON-TIME COMP.</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileValue}>100%</Text>
              <Text style={styles.tileLabel}>SAFETY SCORE</Text>
            </View>
          </View>

          {/* Star distribution */}
          <View style={styles.bars}>
            {BARS.map((b) => (
              <View key={b.star} style={styles.barRow}>
                <Text style={styles.barLabel}>{b.star}</Text>
                <View style={styles.barTrack}>
                  <View style={[styles.barFill, { width: b.width }]} />
                </View>
              </View>
            ))}
          </View>

          {/* Reviews */}
          <Text style={styles.sectionTitle}>Recent Reviews</Text>
          {REVIEWS.map((r) => (
            <View key={r.key} style={styles.review}>
              <View style={styles.reviewHead}>
                <View style={styles.reviewAvatar}>
                  <Ionicons name="person" size={12} color="#7A7A7A" />
                </View>
                <Text style={styles.reviewName}>{r.name}</Text>
                <Text style={styles.reviewTime}>{r.time}</Text>
              </View>
              <Text style={styles.reviewText}>{r.text}</Text>
            </View>
          ))}

          {/* Tip */}
          <View style={styles.tip}>
            <Ionicons name="bulb-outline" size={18} color={colors.text} />
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>Improve your score</Text>
              <Text style={styles.tipText}>Provide clearer mission logs after each flight.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <PilotBottomNav active="profile" navigation={navigation} />
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
  inner: {
    paddingHorizontal: 20,
  },
  summary: {
    alignItems: 'center',
    marginVertical: 18,
  },
  rating: {
    fontFamily: fonts.black,
    fontSize: 44,
    color: colors.text,
    marginBottom: 10,
  },
  star: {
    fontSize: 26,
  },
  topRated: {
    backgroundColor: '#242424',
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 8,
  },
  topRatedText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.text,
  },
  basedOn: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  tiles: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  tile: {
    flex: 1,
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
  },
  tileValue: {
    fontFamily: fonts.black,
    fontSize: 16,
    color: colors.text,
    marginBottom: 3,
  },
  tileLabel: {
    fontFamily: fonts.regular,
    fontSize: 8,
    color: colors.textTertiary,
    letterSpacing: 0.4,
  },
  bars: {
    gap: 10,
    marginBottom: 26,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  barLabel: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textSecondary,
    width: 24,
  },
  barTrack: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#242424',
  },
  barFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 14,
  },
  review: {
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 12,
  },
  reviewHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewName: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    flex: 1,
  },
  reviewTime: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.textTertiary,
  },
  reviewText: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#1C1C1E',
    borderRadius: radius.md,
    padding: 14,
    marginTop: 6,
  },
  tipTitle: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 2,
  },
  tipText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
});
