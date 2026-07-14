import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';

// "Add Payment Method" — Card / Bank Transfer tabs, live card preview, card form
export default function AddPaymentMethodScreen({ navigation }) {
  const [tab, setTab] = useState('Card');
  const [isDefault, setIsDefault] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <ScreenHeader title="Add Payment Method" onBack={() => navigation.goBack()} />

        {/* Tabs */}
        <View style={styles.tabs}>
          {['Card', 'Bank Transfer'].map((t) => (
            <TouchableOpacity key={t} style={styles.tab} onPress={() => setTab(t)}>
              <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
              {tab === t ? <View style={styles.tabUnderline} /> : null}
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Card preview */}
          <View style={styles.cardPreview}>
            <Text style={styles.previewNumber}>{'••••  ••••  ••••  ••••'}</Text>
            <View style={styles.previewBottom}>
              <View>
                <Text style={styles.previewLabel}>CARDHOLDER NAME</Text>
                <Text style={styles.previewValue}>RACHAEL AYENI</Text>
              </View>
              <View>
                <Text style={styles.previewLabel}>EXPIRES</Text>
                <Text style={styles.previewValue}>MM/YY</Text>
              </View>
            </View>
          </View>

          {/* Form */}
          <Text style={styles.label}>Card Number</Text>
          <View style={styles.field}>
            <TextInput
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              placeholderTextColor={colors.textPlaceholder}
              keyboardType="number-pad"
            />
            <Ionicons name="card-outline" size={18} color={colors.textPlaceholder} />
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Expiry Date</Text>
              <View style={styles.field}>
                <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor={colors.textPlaceholder} />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>CVV</Text>
              <View style={styles.field}>
                <TextInput style={styles.input} placeholder="•••" placeholderTextColor={colors.textPlaceholder} secureTextEntry />
              </View>
            </View>
          </View>

          <Text style={styles.label}>Cardholder Name</Text>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="e.g. Rachael Ayeni" placeholderTextColor={colors.textPlaceholder} />
          </View>

          <Text style={styles.label}>Billing Address</Text>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="14 Commercial Avenue, Lagos" placeholderTextColor={colors.textPlaceholder} />
          </View>

          {/* Default toggle */}
          <View style={styles.defaultRow}>
            <Text style={styles.defaultText}>Set as default payment method</Text>
            <Switch
              value={isDefault}
              onValueChange={setIsDefault}
              trackColor={{ true: '#3A3A3A', false: '#2C2C2C' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.secureRow}>
            <Ionicons name="lock-closed-outline" size={13} color={colors.textTertiary} />
            <Text style={styles.secureText}>Your card details are encrypted with 256-bit SSL</Text>
          </View>

          <PrimaryButton label="Add Card" onPress={() => navigation.goBack()} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 28,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textSecondary,
  },
  tabTextActive: {
    fontFamily: fonts.bold,
    color: colors.text,
  },
  tabUnderline: {
    position: 'absolute',
    bottom: -1,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: colors.white,
  },
  cardPreview: {
    backgroundColor: '#1E5B2E',
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 24,
  },
  previewNumber: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 28,
  },
  previewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewLabel: {
    fontFamily: fonts.regular,
    fontSize: 8.5,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 0.6,
    marginBottom: 3,
  },
  previewValue: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: '#FFFFFF',
    letterSpacing: 0.4,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 8,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  },
  defaultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  defaultText: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
  },
  secureText: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textTertiary,
  },
});
