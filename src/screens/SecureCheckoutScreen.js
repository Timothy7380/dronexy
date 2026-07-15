import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '../theme';

// Booking step 3 of 3 — "Secure Checkout"
export default function SecureCheckoutScreen({ navigation }) {
  const [method, setMethod] = useState('card');
  const [saveCard, setSaveCard] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color="#111111" />
            </TouchableOpacity>
            <View style={styles.titleHighlight}>
              <Text style={styles.title}>Secure Checkout</Text>
            </View>
            <Ionicons name="lock-closed-outline" size={18} color="#111111" />
          </View>

          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.dot, styles.dotActive]} />
          </View>
          <Text style={styles.step}>Step 3 of 3 {'·'} Payment</Text>

          {/* Summary row */}
          <View style={styles.summary}>
            <View style={styles.summaryLeft}>
              <Ionicons name="navigate-circle-outline" size={18} color="#111111" />
              <Text style={styles.summaryTitle}>Survey Mission {'—'} Lagos</Text>
            </View>
            <Text style={styles.summaryAmount}>{'₦'}5,397,000</Text>
          </View>

          {/* Promo code */}
          <Text style={styles.label}>Promo Code</Text>
          <View style={styles.promoRow}>
            <View style={styles.promoField}>
              <TextInput style={styles.input} placeholder="Enter promo code" placeholderTextColor="#9A9A9A" />
            </View>
            <TouchableOpacity style={styles.applyBtn} activeOpacity={0.8}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {/* Payment methods */}
          <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>
          <TouchableOpacity
            style={[styles.method, method === 'card' && styles.methodActive]}
            onPress={() => setMethod('card')}
          >
            <View style={styles.methodLeft}>
              <Ionicons name="card-outline" size={18} color="#111111" />
              <Text style={styles.methodText}>Card</Text>
            </View>
            <View style={[styles.radio, method === 'card' && styles.radioOn]} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.method, method === 'bank' && styles.methodActive]}
            onPress={() => setMethod('bank')}
          >
            <View style={styles.methodLeft}>
              <Ionicons name="business-outline" size={18} color="#111111" />
              <Text style={styles.methodText}>Bank Transfer</Text>
            </View>
            <View style={[styles.radio, method === 'bank' && styles.radioOn]} />
          </TouchableOpacity>
          <View style={[styles.method, { opacity: 0.5 }]}>
            <View style={styles.methodLeft}>
              <Ionicons name="wallet-outline" size={18} color="#111111" />
              <Text style={styles.methodText}>Wallet</Text>
              <View style={styles.comingSoon}>
                <Text style={styles.comingSoonText}>COMING SOON</Text>
              </View>
            </View>
          </View>

          {/* Card fields */}
          <View style={styles.field}>
            <Ionicons name="card-outline" size={16} color="#8A8A8A" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder={'•••• •••• •••• 4521'}
              placeholderTextColor="#9A9A9A"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.row}>
            <View style={[styles.field, { flex: 1 }]}>
              <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor="#9A9A9A" />
            </View>
            <View style={[styles.field, { flex: 1 }]}>
              <TextInput style={styles.input} placeholder="CVV" placeholderTextColor="#9A9A9A" secureTextEntry />
            </View>
          </View>

          <View style={styles.saveRow}>
            <Text style={styles.saveText}>Save card for future payments</Text>
            <Switch
              value={saveCard}
              onValueChange={setSaveCard}
              trackColor={{ true: '#111111', false: '#D0D0D0' }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Billing info */}
          <Text style={styles.sectionTitle}>BILLING INFO</Text>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="Cardholder Name" placeholderTextColor="#9A9A9A" />
          </View>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#9A9A9A" keyboardType="email-address" />
          </View>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#9A9A9A" keyboardType="phone-pad" />
          </View>

          {/* Escrow banner */}
          <View style={styles.escrow}>
            <Ionicons name="shield-outline" size={18} color="#FFFFFF" />
            <View style={{ flex: 1 }}>
              <Text style={styles.escrowTitle}>Funds Held in Escrow</Text>
              <Text style={styles.escrowSub}>Your payment is securely held until mission completes.</Text>
            </View>
          </View>

          {/* Trust chips */}
          <View style={styles.trustRow}>
            {['SSL Secured', 'PCI Compliant', '256-bit Encrypted'].map((t) => (
              <View key={t} style={styles.trustChip}>
                <Text style={styles.trustText}>{t}</Text>
              </View>
            ))}
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={styles.cta}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('ProcessingPayment')}
          >
            <Ionicons name="lock-closed" size={15} color="#FFFFFF" />
            <Text style={styles.ctaText}>Pay Securely {'·'} {'₦'}5,397,000</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inner: {
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  titleHighlight: {
    backgroundColor: '#FFE93B',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: '#111111',
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E2E2',
  },
  dotActive: {
    backgroundColor: '#111111',
  },
  step: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: '#6A6A6A',
    marginBottom: 16,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  summaryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  summaryTitle: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: '#111111',
  },
  summaryAmount: {
    fontFamily: fonts.black,
    fontSize: 14,
    color: '#111111',
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: '#111111',
    marginBottom: 8,
  },
  promoRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  promoField: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    height: 46,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  applyBtn: {
    borderWidth: 1,
    borderColor: '#111111',
    borderRadius: 999,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: '#111111',
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: '#8A8A8A',
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  methodActive: {
    borderColor: '#111111',
    borderWidth: 1.5,
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  methodText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#111111',
  },
  comingSoon: {
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  comingSoonText: {
    fontFamily: fonts.bold,
    fontSize: 8,
    color: '#8A8A8A',
    letterSpacing: 0.4,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#C9C9C9',
  },
  radioOn: {
    borderWidth: 5,
    borderColor: '#111111',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#111111',
    paddingVertical: 0,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  saveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  saveText: {
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: '#111111',
  },
  escrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#111111',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
  },
  escrowTitle: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  escrowSub: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: 'rgba(255,255,255,0.75)',
  },
  trustRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  trustChip: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  trustText: {
    fontFamily: fonts.regular,
    fontSize: 9.5,
    color: '#6A6A6A',
  },
  cta: {
    flexDirection: 'row',
    height: 54,
    borderRadius: 10,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  ctaText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#FFFFFF',
  },
});
