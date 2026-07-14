import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import BottomNav from '../components/BottomNav';

const FILTERS = ['All', 'PDFs', 'Videos', 'Images'];

const FILES = [
  { key: '1', icon: 'document-text-outline', name: 'Thermal Analysis Report.pdf', meta: '4.2 MB • Jun 12, 2024' },
  { key: '2', icon: 'videocam-outline', name: 'Aerial Survey Grid.mp4', meta: '128 MB • Jun 12, 2024', thumb: true },
  { key: '3', icon: 'image-outline', name: 'High-Res Orthomosaic.jpg', meta: '18.5 MB • Jun 12, 2024', thumb: true },
];

// "Reports" — mission deliverables grouped by mission, filterable by type
export default function ReportsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerSide}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reports</Text>
        <TouchableOpacity style={styles.headerSide}>
          <Ionicons name="options-outline" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.chips}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.chip, filter === f && styles.chipActive]}
            onPress={() => setFilter(f)}
          >
            <Text style={[styles.chipText, filter === f && styles.chipTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Expanded mission group */}
          <View style={styles.groupHeader}>
            <Text style={styles.groupTitle}>Lekki Estate Survey — Jun 12</Text>
            <Ionicons name="chevron-up" size={16} color={colors.textSecondary} />
          </View>

          {FILES.map((f) => (
            <TouchableOpacity key={f.key} style={styles.fileRow} activeOpacity={0.8}>
              <View style={styles.fileIcon}>
                <Ionicons name={f.icon} size={18} color={colors.white} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.fileName}>{f.name}</Text>
                <Text style={styles.fileMeta}>{f.meta}</Text>
              </View>
              {f.thumb ? <View style={styles.fileThumb} /> : null}
              <Ionicons name="download-outline" size={18} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}

          {/* Collapsed mission group */}
          <View style={styles.groupHeader}>
            <View style={styles.groupTitleRow}>
              <Text style={styles.groupTitle}>Victoria Island Mapping — Jun 5</Text>
              <View style={styles.filesChip}>
                <Text style={styles.filesChipText}>4 FILES</Text>
              </View>
            </View>
            <Ionicons name="chevron-down" size={16} color={colors.textSecondary} />
          </View>

          <View style={styles.empty}>
            <Ionicons name="paper-plane-outline" size={44} color="#232323" />
            <Text style={styles.emptyText}>No other reports yet</Text>
          </View>
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
  chips: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  chip: {
    backgroundColor: '#1E1E1E',
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: colors.white,
  },
  chipText: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.textSecondary,
  },
  chipTextActive: {
    fontFamily: fonts.bold,
    color: colors.black,
  },
  inner: {
    paddingHorizontal: 20,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  groupTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  groupTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  filesChip: {
    backgroundColor: '#242424',
    borderRadius: radius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  filesChipText: {
    fontFamily: fonts.bold,
    fontSize: 9,
    color: colors.textSecondary,
    letterSpacing: 0.4,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  fileIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileName: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginBottom: 2,
  },
  fileMeta: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
  },
  fileThumb: {
    width: 40,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#2E2E2E',
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#3A3A3A',
  },
});
