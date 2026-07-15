import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';

const DETAILS = [
  { key: '1', label: 'Amount Paid', value: '₦5,397,000' },
  { key: '2', label: 'Mission ID', value: 'DX-7721' },
  { key: '3', label: 'Payment Method', value: 'Card •••• 4521' },
  { key: '4', label: 'Date', value: '12 Jan 2025, 09:00 AM' },
];

// Booking — payment success confirmation
export default function PaymentSuccessfulScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.badge}>
          <Ionicons name="checkmark" size={46} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>Payment Successful</Text>
        <Text style={styles.sub}>
          Your mission has been booked and your payment is secured in escrow.
        </Text>

        <View style={styles.card}>
          {DETAILS.map((d, i) => (
            <View key={d.key} style={[styles.row, i < DETAILS.length - 1 && styles.rowBorder]}>
              <Text style={styles.rowLabel}>{d.label}</Text>
              <Text style={styles.rowValue}>{d.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.escrow}>
          <Ionicons name="shield-checkmark" size={18} color="#111111" />
          <View style={{ flex: 1 }}>
            <Text style={styles.escrowTitle}>Funds Held in Escrow</Text>
            <Text style={styles.escrowSub}>
              Released to the pilot only after you approve the delivered reports.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primary}
          activeOpacity={0.85}
          onPress={() => navigation.reset({ index: 1, routes: [{ name: 'Main' }, { name: 'Activity' }] })}
        >
          <Text style={styles.primaryText}>View Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondary}
          activeOpacity={0.85}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}
        >
          <Text style={styles.secondaryText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scroll: { alignItems: 'center', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 20 },
  badge: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: colors.green,
    alignItems: 'center', justifyContent: 'center', marginBottom: 24,
  },
  title: { fontFamily: fonts.black, fontSize: 24, color: '#111111', marginBottom: 10 },
  sub: {
    fontFamily: fonts.regular, fontSize: 14, color: '#6A6A6A',
    textAlign: 'center', lineHeight: 21, marginBottom: 28, paddingHorizontal: 10,
  },
  card: {
    alignSelf: 'stretch', backgroundColor: '#F5F5F5', borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 4, marginBottom: 18,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: '#E6E6E6' },
  rowLabel: { fontFamily: fonts.regular, fontSize: 13.5, color: '#6A6A6A' },
  rowValue: { fontFamily: fonts.bold, fontSize: 13.5, color: '#111111' },
  escrow: {
    alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#F0F0F0', borderRadius: 12, padding: 14,
  },
  escrowTitle: { fontFamily: fonts.bold, fontSize: 13, color: '#111111', marginBottom: 2 },
  escrowSub: { fontFamily: fonts.regular, fontSize: 11.5, color: '#6A6A6A', lineHeight: 16 },
  footer: { paddingHorizontal: 24, paddingBottom: 24, gap: 12 },
  primary: {
    height: 54, borderRadius: 10, backgroundColor: '#111111',
    alignItems: 'center', justifyContent: 'center',
  },
  primaryText: { fontFamily: fonts.bold, fontSize: 15, color: '#FFFFFF' },
  secondary: {
    height: 54, borderRadius: 10, borderWidth: 1, borderColor: '#D4D4D4',
    alignItems: 'center', justifyContent: 'center',
  },
  secondaryText: { fontFamily: fonts.bold, fontSize: 15, color: '#111111' },
});
