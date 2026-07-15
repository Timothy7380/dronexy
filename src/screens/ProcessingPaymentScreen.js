import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '../theme';

// Booking — payment processing interstitial, auto-advances to success
export default function ProcessingPaymentScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('PaymentSuccessful'), 2600);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.center}>
        <View style={styles.spinnerWrap}>
          <ActivityIndicator size="large" color="#111111" />
          <View style={styles.lockBadge}>
            <Ionicons name="lock-closed" size={15} color="#111111" />
          </View>
        </View>
        <Text style={styles.title}>Processing Payment</Text>
        <Text style={styles.sub}>
          Please wait while we securely process your transaction. Do not close this screen.
        </Text>

        <View style={styles.amountBox}>
          <Text style={styles.amountLabel}>AMOUNT</Text>
          <Text style={styles.amount}>{'₦'}5,397,000</Text>
        </View>

        <View style={styles.escrowRow}>
          <Ionicons name="shield-checkmark-outline" size={15} color="#6A6A6A" />
          <Text style={styles.escrowText}>Funds will be held in escrow until completion</Text>
        </View>
      </View>

      <View style={styles.trustRow}>
        {['SSL Secured', 'PCI Compliant', '256-bit Encrypted'].map((t) => (
          <View key={t} style={styles.trustChip}>
            <Text style={styles.trustText}>{t}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 },
  spinnerWrap: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: '#F4F4F4',
    alignItems: 'center', justifyContent: 'center', marginBottom: 28,
  },
  lockBadge: {
    position: 'absolute', bottom: -2, right: -2,
    width: 32, height: 32, borderRadius: 16, backgroundColor: '#FFE93B',
    alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FFFFFF',
  },
  title: { fontFamily: fonts.black, fontSize: 22, color: '#111111', marginBottom: 10 },
  sub: {
    fontFamily: fonts.regular, fontSize: 14, color: '#6A6A6A',
    textAlign: 'center', lineHeight: 21, marginBottom: 30,
  },
  amountBox: {
    alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12,
    paddingVertical: 18, paddingHorizontal: 40, marginBottom: 20,
  },
  amountLabel: { fontFamily: fonts.bold, fontSize: 10, color: '#8A8A8A', letterSpacing: 0.6, marginBottom: 6 },
  amount: { fontFamily: fonts.black, fontSize: 26, color: '#111111' },
  escrowRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  escrowText: { fontFamily: fonts.regular, fontSize: 12.5, color: '#6A6A6A' },
  trustRow: { flexDirection: 'row', gap: 8, justifyContent: 'center', paddingBottom: 30 },
  trustChip: { borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4 },
  trustText: { fontFamily: fonts.regular, fontSize: 9.5, color: '#6A6A6A' },
});
