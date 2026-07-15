import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '../theme';

const COSTS = [
  { key: '1', label: 'Service Fee', value: '₦4,845,000' },
  { key: '2', label: 'Platform Fee', value: '₦512,437' },
  { key: '3', label: 'VAT (7.5%)', value: '₦39,563' },
];

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={14} color="#8A8A8A" />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

// Booking step 2 of 3 — "Review Request"
export default function ReviewRequestScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color="#111111" />
            </TouchableOpacity>
            <Text style={styles.title}>Review Request</Text>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.step}>Step 2 of 3 {'·'} Review Details</Text>

          {/* Mission card */}
          <View style={styles.missionCard}>
            <View style={styles.missionIcon}>
              <Ionicons name="navigate-circle-outline" size={20} color="#111111" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.missionTitle}>Survey Mission</Text>
              <Text style={styles.missionSub}>Lagos Industrial Zone</Text>
            </View>
            <View style={styles.standardChip}>
              <Text style={styles.standardText}>Standard</Text>
            </View>
          </View>

          <Section title="LOCATION">
            <Text style={styles.value}>14 Commercial Ave, Lagos</Text>
            <Text style={styles.valueSub}>6.4531{'°'} N, 3.3958{'°'} E</Text>
          </Section>

          <Section title="SCHEDULE">
            <Text style={styles.value}>12 Jan 2025 {'·'} 09:00 AM</Text>
            <Text style={styles.valueSub}>Duration: 3 hours</Text>
          </Section>

          <Section title="DELIVERABLES">
            <View style={styles.chips}>
              {['Images', '4K Video', 'Survey Report'].map((c) => (
                <View key={c} style={styles.chip}>
                  <Text style={styles.chipText}>{c}</Text>
                </View>
              ))}
            </View>
          </Section>

          <Section title="UPLOADED FILES">
            <View style={styles.fileRow}>
              <Ionicons name="document-outline" size={15} color="#111111" />
              <Text style={styles.fileName}>Site_Map_A1.pdf</Text>
              <Text style={styles.fileSize}>2.4 MB</Text>
            </View>
            <View style={styles.fileRow}>
              <Ionicons name="document-outline" size={15} color="#111111" />
              <Text style={styles.fileName}>Requirements.docx</Text>
              <Text style={styles.fileSize}>1.1 MB</Text>
            </View>
          </Section>

          {/* Cost breakdown */}
          <View style={styles.costCard}>
            <Text style={styles.costTitle}>Cost Breakdown</Text>
            {COSTS.map((c) => (
              <View key={c.key} style={styles.costRow}>
                <Text style={styles.costLabel}>{c.label}</Text>
                <Text style={styles.costValue}>{c.value}</Text>
              </View>
            ))}
            <View style={styles.costDivider} />
            <View style={styles.costRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>{'₦'}5,397,000</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.cta}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('SecureCheckout')}
          >
            <Text style={styles.ctaText}>Proceed to Payment</Text>
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
    marginBottom: 18,
  },
  missionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    padding: 14,
    gap: 12,
    marginBottom: 22,
  },
  missionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#111111',
    marginBottom: 2,
  },
  missionSub: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: '#6A6A6A',
  },
  standardChip: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  standardText: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: '#111111',
  },
  section: {
    marginBottom: 20,
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: '#8A8A8A',
    letterSpacing: 0.6,
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#111111',
    marginBottom: 3,
  },
  valueSub: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#6A6A6A',
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
  },
  chip: {
    backgroundColor: '#F2F2F2',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#111111',
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  fileName: {
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: '#111111',
    flex: 1,
  },
  fileSize: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: '#9A9A9A',
  },
  costCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 22,
  },
  costTitle: {
    fontFamily: fonts.bold,
    fontSize: 14.5,
    color: '#111111',
    marginBottom: 12,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  costLabel: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#6A6A6A',
  },
  costValue: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#111111',
  },
  costDivider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginVertical: 8,
  },
  totalLabel: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#111111',
  },
  totalValue: {
    fontFamily: fonts.black,
    fontSize: 15,
    color: '#111111',
  },
  cta: {
    height: 54,
    borderRadius: 10,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#FFFFFF',
  },
});
