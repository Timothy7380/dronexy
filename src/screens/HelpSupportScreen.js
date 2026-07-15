import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

const TOPICS = [
  { key: 'book', icon: 'help-circle-outline', title: 'How to book a mission' },
  { key: 'billing', icon: 'card-outline', title: 'Payment & billing' },
  { key: 'tracking', icon: 'location-outline', title: 'Mission tracking' },
  { key: 'reports', icon: 'document-text-outline', title: 'Deliverables & reports' },
  { key: 'safety', icon: 'shield-outline', title: 'Safety & regulations' },
];

const CONTACT = [
  { key: 'email', icon: 'mail-outline', title: 'Email Support', sub: 'support@dronexy.com' },
  { key: 'center', icon: 'globe-outline', title: 'Help Center', sub: 'Browse all articles' },
  { key: 'forum', icon: 'people-outline', title: 'Community Forum', sub: 'Ask the Dronexy community' },
];

// "Help & Support" — search, quick contact, topics, contact channels, app info
export default function HelpSupportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={styles.headerSide} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.inner}>
          <View style={styles.search}>
            <Ionicons name="search" size={16} color={colors.textPlaceholder} />
            <TextInput
              placeholder="Search help articles..."
              placeholderTextColor={colors.textPlaceholder}
              style={styles.searchInput}
            />
          </View>

          <View style={styles.cardsRow}>
            <TouchableOpacity style={styles.quickCard} activeOpacity={0.85}>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color={colors.white} />
              <Text style={styles.quickTitle}>Live Chat</Text>
              <Text style={styles.quickSub}>Available 24/7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickCard} activeOpacity={0.85}>
              <Ionicons name="call-outline" size={24} color={colors.white} />
              <Text style={styles.quickTitle}>Call Us</Text>
              <Text style={styles.quickSub}>Mon-Fri 8am-6pm</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>POPULAR TOPICS</Text>
        {TOPICS.map((t) => (
          <TouchableOpacity key={t.key} style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowIcon}>
              <Ionicons name={t.icon} size={17} color={colors.white} />
            </View>
            <Text style={styles.rowTitleSingle}>{t.title}</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} />
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>CONTACT US</Text>
        {CONTACT.map((c) => (
          <TouchableOpacity key={c.key} style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowIcon}>
              <Ionicons name={c.icon} size={17} color={colors.white} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{c.title}</Text>
              <Text style={styles.rowSub}>{c.sub}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>APP</Text>
        <TouchableOpacity style={styles.row} activeOpacity={0.7}>
          <View style={styles.rowIcon}>
            <Ionicons name="star-outline" size={17} color={colors.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Rate the App</Text>
            <Text style={styles.rowSub}>Enjoying Dronexy? Let us know!</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="information-circle-outline" size={17} color={colors.white} />
          </View>
          <Text style={styles.rowTitleSingle}>App Version</Text>
          <Text style={styles.rowValue}>v2.4.1 (Build 204)</Text>
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
  inner: { paddingHorizontal: 20 },
  search: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#1C1C1E', borderRadius: radius.md,
    paddingHorizontal: 14, height: 48, marginTop: 6, marginBottom: 16,
  },
  searchInput: { flex: 1, fontFamily: fonts.regular, fontSize: 14, color: colors.text, padding: 0 },
  cardsRow: { flexDirection: 'row', gap: 12, marginBottom: 8 },
  quickCard: {
    flex: 1, backgroundColor: '#1C1C1E', borderRadius: radius.md,
    paddingVertical: 20, alignItems: 'center', gap: 8,
    borderWidth: 1, borderColor: '#262626',
  },
  quickTitle: { fontFamily: fonts.bold, fontSize: 15, color: colors.text },
  quickSub: { fontFamily: fonts.regular, fontSize: 11.5, color: colors.textSecondary },
  sectionTitle: {
    fontFamily: fonts.bold, fontSize: 11, color: colors.textTertiary,
    letterSpacing: 0.8, paddingHorizontal: 20, paddingTop: 22, paddingBottom: 8,
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
  rowTitleSingle: { flex: 1, fontFamily: fonts.bold, fontSize: 14.5, color: colors.text },
  rowSub: { fontFamily: fonts.regular, fontSize: 12, color: colors.textSecondary },
  rowValue: { fontFamily: fonts.regular, fontSize: 12, color: colors.textTertiary },
});
