import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

const CARDS = [
  { key: '1', icon: 'card', iconColor: '#3B6FE0', last4: '8472', expires: '08/27', isDefault: true },
  { key: '2', icon: 'card', iconColor: '#E04040', last4: '3310', expires: '03/26' },
];

const HISTORY = [
  { key: '1', title: 'Survey Mission', meta: 'Jan 12, 2025 · M01,903' },
  { key: '2', title: 'Delivery Mission', meta: 'Jan 08, 2025 · M12,400' },
  { key: '3', title: 'Mapping Mission', meta: 'Dec 28, 2024 · M08,150' },
];

// "Payment Methods" — saved cards, bank accounts, add options, transaction history
export default function PaymentMethodsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <TouchableOpacity style={styles.headerSide} onPress={() => navigation.navigate('AddPaymentMethod')}>
          <Ionicons name="add" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          <Text style={styles.sectionTitle}>SAVED CARDS</Text>
          {CARDS.map((c) => (
            <View key={c.key} style={styles.card}>
              <View style={styles.cardIcon}>
                <Ionicons name={c.icon} size={18} color={c.iconColor} />
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.cardNumber}>{'•••• •••• •••• '}{c.last4}</Text>
                  {c.isDefault ? <Text style={styles.defaultTag}>DEFAULT</Text> : null}
                </View>
                <Text style={styles.cardMeta}>Expires {c.expires}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={16} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>
          ))}

          <Text style={styles.sectionTitle}>BANK ACCOUNTS</Text>
          <View style={styles.card}>
            <View style={styles.cardIcon}>
              <Ionicons name="business-outline" size={18} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardNumber}>GTBank - 0123456789</Text>
              <Text style={styles.verified}>Verified</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={16} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>OTHER</Text>
          <TouchableOpacity style={styles.otherRow} activeOpacity={0.8} onPress={() => navigation.navigate('AddPaymentMethod')}>
            <Ionicons name="add-circle-outline" size={20} color={colors.white} />
            <Text style={styles.otherText}>Add New Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherRow} activeOpacity={0.8}>
            <Ionicons name="link-outline" size={20} color={colors.white} />
            <Text style={styles.otherText}>Link Bank Account</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>TRANSACTION HISTORY</Text>
          {HISTORY.map((h) => (
            <View key={h.key} style={styles.txRow}>
              <View style={styles.txIcon}>
                <Ionicons name="receipt-outline" size={16} color={colors.white} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.txTitle}>{h.title}</Text>
                <Text style={styles.cardMeta}>{h.meta}</Text>
              </View>
              <View style={styles.paidChip}>
                <Text style={styles.paidText}>PAID</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 10.5,
    color: colors.textTertiary,
    letterSpacing: 0.8,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  cardIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  cardNumber: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  defaultTag: {
    fontFamily: fonts.black,
    fontSize: 8,
    color: colors.textSecondary,
    letterSpacing: 0.5,
    backgroundColor: '#242424',
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  cardMeta: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
  },
  verified: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: '#4ECB71',
  },
  otherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 16,
    marginBottom: 10,
  },
  otherText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  txIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txTitle: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 2,
  },
  paidChip: {
    backgroundColor: '#183D26',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  paidText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: '#4ECB71',
    letterSpacing: 0.5,
  },
});
