import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

const DOCS = [
  { key: 'tos', title: 'Terms of Service', sub: 'Last updated Jan 2025' },
  { key: 'privacy', title: 'Privacy Policy', sub: 'Last updated Jan 2025' },
  { key: 'cookie', title: 'Cookie Policy', sub: 'Last updated Jan 2025' },
  { key: 'escrow', title: 'Escrow & Payment Terms', sub: 'How funds are held and released' },
  { key: 'pilot', title: 'Pilot Service Agreement', sub: 'Updated regularly' },
  { key: 'aup', title: 'Acceptable Use Policy', sub: 'Updated regularly' },
  { key: 'refund', title: 'Refund Policy', sub: 'Updated regularly' },
  { key: 'dpa', title: 'Data Processing Agreement', sub: 'Updated regularly' },
];

// "Legal" — list of legal documents + contact actions
export default function LegalScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Legal</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <Text style={styles.intro}>
          Please read these documents carefully. By using Dronexy you agree to the following.
        </Text>

        {DOCS.map((d) => (
          <TouchableOpacity key={d.key} style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowIcon}>
              <Ionicons name="document-text-outline" size={17} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{d.title}</Text>
              <Text style={styles.rowSub}>{d.sub}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.copyright}>
          {'©'} 2026 Dronexy Technologies Ltd. All rights reserved.{'\n'}RC 1234567 {'·'} Lagos, Nigeria
        </Text>

        <View style={styles.footerBtns}>
          <TouchableOpacity style={styles.footerBtn} activeOpacity={0.85}>
            <Text style={styles.footerBtnText}>Contact Legal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} activeOpacity={0.85}>
            <Text style={styles.footerBtnText}>Report an Issue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingVertical: 12,
  },
  headerSide: { width: 32 },
  headerTitle: { fontFamily: fonts.bold, fontSize: 17, color: colors.text },
  intro: {
    fontFamily: fonts.regular, fontSize: 14, color: colors.textSecondary,
    lineHeight: 21, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 18,
  },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    paddingHorizontal: 20, paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: '#1A1A1A',
  },
  rowIcon: {
    width: 38, height: 38, borderRadius: 10, backgroundColor: '#1C1C1E',
    alignItems: 'center', justifyContent: 'center',
  },
  rowTitle: { fontFamily: fonts.bold, fontSize: 14.5, color: colors.text, marginBottom: 2 },
  rowSub: { fontFamily: fonts.regular, fontSize: 12, color: colors.textSecondary },
  copyright: {
    fontFamily: fonts.regular, fontSize: 11.5, color: colors.textTertiary,
    textAlign: 'center', lineHeight: 18, marginTop: 30, marginBottom: 22, paddingHorizontal: 30,
  },
  footerBtns: { flexDirection: 'row', gap: 12, paddingHorizontal: 20 },
  footerBtn: {
    flex: 1, height: 50, borderRadius: radius.pill, borderWidth: 1, borderColor: '#4A4A4A',
    alignItems: 'center', justifyContent: 'center',
  },
  footerBtnText: { fontFamily: fonts.bold, fontSize: 13, color: colors.text },
});
