import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const CONVERSATIONS = [
  { key: '1', name: 'Oluwaseun A.', mission: 'Lekki Estate Survey', preview: 'The thermal maps have been uplo...', time: '10:42 AM', unread: 2 },
  { key: '2', name: 'John Doe', mission: 'Pipeline Inspection', preview: 'Everything looks clear on sector B...', time: 'Yesterday' },
  { key: '3', name: 'Adebayo T.', mission: 'Farm Thermal Analysis', preview: 'Confirming site access for tomorro...', time: 'Jun 12', unread: 1 },
  { key: '4', name: 'Sarah Jenkins', mission: 'Logistics Monitoring', preview: "I've attached the raw footage from...", time: 'Jun 10' },
  { key: '5', name: 'Dronexy Support', mission: null, preview: 'How can we help you today?', time: 'Pinned', support: true },
];

// "Messages" — conversation list with search and unread badges
export default function MessagesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerSide} />
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="create-outline" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrap}>
        <View style={styles.search}>
          <Ionicons name="search" size={16} color={colors.textPlaceholder} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations"
            placeholderTextColor={colors.textPlaceholder}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        {CONVERSATIONS.map((c) => (
          <TouchableOpacity
            key={c.key}
            style={[styles.row, c.support && styles.rowSupport]}
            activeOpacity={0.8}
          >
            <View style={styles.avatar}>
              <Ionicons name={c.support ? 'headset' : 'person'} size={18} color="#7A7A7A" />
            </View>
            <View style={styles.rowBody}>
              <View style={styles.rowTop}>
                <Text style={styles.name}>{c.name}</Text>
                <Text style={styles.time}>{c.time}</Text>
              </View>
              {c.mission ? <Text style={styles.mission}>{c.mission}</Text> : null}
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
      </ScrollView>

      <BottomNav active="messages" navigation={navigation} />
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
  searchWrap: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: radius.pill,
    height: 44,
    paddingHorizontal: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
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
  rowSupport: {
    backgroundColor: '#141414',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
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
});
