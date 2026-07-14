import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const TILES = [
  { key: '1', value: '$420', label: 'ESCROW' },
  { key: '2', value: '$890', label: 'THIS MONTH' },
  { key: '3', value: '$12.6k', label: 'LIFETIME' },
];

const PAYOUTS = [
  { key: '1', title: 'Victoria Island Mapping', date: 'Jun 18', amount: '+$180', status: 'PAID' },
  { key: '2', title: 'Lekki Aerial Photography', date: 'Jun 16', amount: '+$120', status: 'PAID' },
  { key: '3', title: 'Bridge Inspection B-4', date: 'Jun 14', amount: '+$450', status: 'PROCESSING' },
];

// Pilot "Earnings" — balance, summary tiles, payout history, bank + withdraw
export default function EarningsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          <Text style={styles.headerTitle}>Earnings</Text>

          {/* Balance card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balance}>$2,340.00</Text>
            <TouchableOpacity style={styles.withdrawBtn} activeOpacity={0.85}>
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>

          {/* Summary tiles */}
          <View style={styles.tiles}>
            {TILES.map((t) => (
              <View key={t.key} style={styles.tile}>
                <Text style={styles.tileValue}>{t.value}</Text>
                <Text style={styles.tileLabel}>{t.label}</Text>
              </View>
            ))}
          </View>

          {/* Payout history */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Payout History</Text>
            <TouchableOpacity>
              <Ionicons name="search" size={17} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          {PAYOUTS.map((p) => (
            <View key={p.key} style={styles.payoutRow}>
              <View>
                <Text style={styles.payoutTitle}>{p.title}</Text>
                <Text style={styles.payoutDate}>{p.date}</Text>
              </View>
              <View style={styles.payoutRight}>
                <Text style={styles.payoutAmount}>{p.amount}</Text>
                <Text style={[styles.payoutStatus, p.status === 'PROCESSING' && { color: '#E5B84E' }]}>
                  {p.status}
                </Text>
              </View>
            </View>
          ))}

          {/* Bank row */}
          <View style={styles.bankRow}>
            <View style={styles.bankLeft}>
              <Ionicons name="server-outline" size={18} color={colors.white} />
              <Text style={styles.bankText}>GTBank ••••4821</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.withdrawFunds} activeOpacity={0.85}>
            <Text style={styles.withdrawFundsText}>Withdraw Funds</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <PilotBottomNav active="earnings" navigation={navigation} />
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
  balanceCard: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 14,
  },
  balanceLabel: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  balance: {
    fontFamily: fonts.black,
    fontSize: 34,
    color: colors.text,
    marginBottom: 16,
  },
  withdrawBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: radius.pill,
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  withdrawText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
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
    fontSize: 8.5,
    color: colors.textTertiary,
    letterSpacing: 0.5,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
  },
  payoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  payoutTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 3,
  },
  payoutDate: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
  },
  payoutRight: {
    alignItems: 'flex-end',
  },
  payoutAmount: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 3,
  },
  payoutStatus: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: '#4ECB71',
    letterSpacing: 0.5,
  },
  bankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  bankLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bankText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  changeText: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  withdrawFunds: {
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  withdrawFundsText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
});
