import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PilotBottomNav from '../components/PilotBottomNav';

const CONVERSATIONS = [
  { key: '1', name: 'Chevron Nigeria', mission: 'Re: Lekki Shoot', preview: 'The latest scan looks perfect, James. Tha...', time: '10:45 AM', unread: 2 },
  { key: '2', name: 'Dronexy Admin', mission: 'System Update', preview: 'New payment policy update for Q4.', time: '9:12 AM', admin: true },
  { key: '3', name: 'Adebayo K.', mission: 'Re: Bridge Survey', preview: 'Can we reschedule the Ikoyi flight to tom...', time: 'Yesterday', unread: 1 },
  { key: '4', name: 'Lekki Properties', mission: 'Re: Real Estate Mapping', preview: "I've uploaded the site boundaries for review.", time: 'Yesterday' },
];

// Pilot "Messages" — client + admin conversations
export default function PilotMessagesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.editBtn}>
          <Ionicons name="pencil" size={16} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrap}>
        <View style={styles.search}>
          <Ionicons name="search" size={15} color={colors.textPlaceholder} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor={colors.textPlaceholder}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        {CONVERSATIONS.map((c) => (
          <TouchableOpacity key={c.key} style={styles.row} activeOpacity={0.8}>
            <View style={styles.avatar}>
              <Ionicons name={c.admin ? 'shield-checkmark' : 'person'} size={18} color="#7A7A7A" />
            </View>
            <View style={styles.rowBody}>
              <View style={styles.rowTop}>
                <Text style={styles.name}>{c.name}</Text>
                <Text style={styles.time}>{c.time}</Text>
              </View>
              <Text style={styles.mission}>{c.mission}</Text>
              <View style={styles.rowBottom}>
                <Text style={styles.preview} numberOfLines={1}>{c.preview}</Text>
                {c.unread ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{c.unread}</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <Text style={styles.noMore}>No more conversations to show</Text>
      </ScrollView>

      <PilotBottomNav active="home" navigation={navigation} />
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
    paddingVertical: 14,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.text,
  },
  editBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchWrap: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: radius.pill,
    height: 42,
    paddingHorizontal: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: colors.text,
    paddingVertical: 0,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#161616',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBody: {
    flex: 1,
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  time: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.textTertiary,
  },
  mission: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
    marginBottom: 2,
  },
  rowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  preview: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
    flex: 1,
    marginRight: 10,
  },
  badge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  badgeText: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.black,
  },
  noMore: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#3A3A3A',
    textAlign: 'center',
    paddingVertical: 30,
  },
});
