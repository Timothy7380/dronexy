import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const TRANSACTIONS = [
  { key: '1', title: 'Lekki Estate Survey', date: 'Oct 20, 2026', status: 'COMPLETED', pill: true },
  { key: '2', title: 'Security Patrol', date: 'Oct 18, 2026', status: 'IN ESCROW', pill: false },
  { key: '3', title: 'Initial Deposit', date: 'Oct 15, 2026', status: 'PENDING', pill: true },
];

const INVOICES = [
  { key: '1', number: 'INV-9827', date: 'Oct 20, 2026' },
  { key: '2', number: 'INV-9812', date: 'Oct 15, 2026' },
];

// "Payments & Escrow" — escrow balance, transaction history, invoices
export default function PaymentsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payments & Escrow</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="help-circle-outline" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Escrow balance card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>ESCROW BALANCE</Text>
            <Text style={styles.balance}>$1,200.00</Text>
            <Text style={styles.balanceNote}>Protected until delivery of reports</Text>
            <TouchableOpacity style={styles.releaseBtn} activeOpacity={0.85}>
              <Text style={styles.releaseText}>Release Payment</Text>
            </TouchableOpacity>
          </View>

          {/* Transaction history */}
          <Text style={styles.sectionTitle}>Transaction History</Text>
          {TRANSACTIONS.map((t) => (
            <View key={t.key} style={styles.txRow}>
              <View>
                <Text style={styles.txTitle}>{t.title}</Text>
                <Text style={styles.txDate}>{t.date}</Text>
              </View>
              {t.pill ? (
                <Text style={styles.txStatus}>{t.status}</Text>
              ) : (
                <Text style={styles.txStatusText}>{t.status}</Text>
              )}
            </View>
          ))}

          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total Spent This Month: $820</Text>
          </View>

          {/* Invoices */}
          <Text style={styles.sectionTitle}>Recent Invoices</Text>
          {INVOICES.map((inv) => (
            <TouchableOpacity key={inv.key} style={styles.invRow} activeOpacity={0.8}>
              <View style={styles.invIcon}>
                <Ionicons name="close-circle-outline" size={20} color={colors.white} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.invNumber}>{inv.number}</Text>
                <Text style={styles.txDate}>{inv.date}</Text>
              </View>
              <Ionicons name="download-outline" size={18} color={colors.textSecondary} />
            </TouchableOpacity>
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
  balanceCard: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 26,
  },
  balanceLabel: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.textTertiary,
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  balance: {
    fontFamily: fonts.black,
    fontSize: 32,
    color: colors.text,
    marginBottom: 4,
  },
  balanceNote: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  releaseBtn: {
    height: 42,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  releaseText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  txTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 3,
  },
  txDate: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
  },
  txStatus: {
    fontFamily: fonts.black,
    fontSize: 9,
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
    letterSpacing: 0.4,
  },
  txStatusText: {
    fontFamily: fonts.black,
    fontSize: 10,
    color: colors.text,
    letterSpacing: 0.4,
  },
  totalRow: {
    backgroundColor: '#161616',
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: 'center',
    marginVertical: 22,
  },
  totalText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
  },
  invRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  invIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  invNumber: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 2,
  },
});
