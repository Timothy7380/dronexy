import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';

const TASKS = [
  { key: '1', label: 'Pre-flight check', done: true },
  { key: '2', label: 'Launch drone', done: true },
  { key: '3', label: 'Area coverage', done: false },
  { key: '4', label: 'Land & document', done: false },
];

// "Mission Workspace" — task checklist, media upload, notes, submit report
export default function MissionWorkspaceScreen({ navigation }) {
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Mission Workspace</Text>
            <View style={styles.avatar} />
          </View>

          <View style={styles.titleRow}>
            <Text style={styles.title}>Eko Atlantic Mapping</Text>
            <View style={styles.statusChip}>
              <Text style={styles.statusText}>IN PROGRESS</Text>
            </View>
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Progress: 2/4 tasks</Text>
            <Text style={styles.progressPct}>50%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '50%' }]} />
          </View>

          {/* Task checklist */}
          <View style={styles.checklistCard}>
            <Text style={styles.cardTitle}>Task Checklist</Text>
            {TASKS.map((t) => (
              <View key={t.key} style={styles.taskRow}>
                <View style={[styles.checkbox, t.done && styles.checkboxDone]}>
                  {t.done ? <Ionicons name="checkmark" size={12} color={colors.black} /> : null}
                </View>
                <Text style={[styles.taskLabel, !t.done && { color: colors.textSecondary }]}>
                  {t.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Media upload */}
          <Text style={styles.sectionTitle}>Media Upload</Text>
          <View style={styles.dropzone}>
            <Ionicons name="close-circle-outline" size={30} color={colors.textSecondary} />
            <Text style={styles.dropTitle}>Upload photos & videos</Text>
            <Text style={styles.dropSub}>PNG, JPG, MOV, MP4 up to 500MB</Text>
            <TouchableOpacity style={styles.chooseBtn} activeOpacity={0.85}>
              <Text style={styles.chooseText}>Choose Files</Text>
            </TouchableOpacity>
          </View>

          {/* Uploaded thumbnails */}
          <View style={styles.thumbs}>
            {[1, 2].map((i) => (
              <View key={i} style={styles.thumb}>
                <Ionicons name="image-outline" size={22} color="#4A4A4A" />
                <View style={styles.thumbRemove}>
                  <Ionicons name="close" size={10} color={colors.white} />
                </View>
              </View>
            ))}
          </View>

          {/* Notes */}
          <Text style={styles.sectionTitle}>Mission Notes</Text>
          <TextInput
            style={styles.notes}
            placeholder="Add mission notes..."
            placeholderTextColor={colors.textPlaceholder}
            multiline
            maxLength={500}
            value={notes}
            onChangeText={setNotes}
          />
          <Text style={styles.charCount}>{notes.length}/500 characters</Text>

          <PrimaryButton label="Submit Report" onPress={() => navigation.navigate('MissionReport')} />
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
  inner: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.white,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 19,
    color: colors.text,
  },
  statusChip: {
    backgroundColor: '#242424',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontFamily: fonts.black,
    fontSize: 8.5,
    color: colors.text,
    letterSpacing: 0.5,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontFamily: fonts.regular,
    fontSize: 11.5,
    color: colors.textSecondary,
  },
  progressPct: {
    fontFamily: fonts.bold,
    fontSize: 11.5,
    color: colors.text,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2C2C2C',
    marginBottom: 20,
  },
  progressFill: {
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  checklistCard: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 22,
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    marginBottom: 14,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  taskLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
  dropzone: {
    borderWidth: 1.5,
    borderColor: '#3A3A3A',
    borderStyle: 'dashed',
    borderRadius: radius.lg,
    alignItems: 'center',
    paddingVertical: 26,
    marginBottom: 14,
  },
  dropTitle: {
    fontFamily: fonts.bold,
    fontSize: 13.5,
    color: colors.text,
    marginTop: 10,
    marginBottom: 3,
  },
  dropSub: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
    marginBottom: 14,
  },
  chooseBtn: {
    borderWidth: 1,
    borderColor: '#4A4A4A',
    borderRadius: radius.sm,
    paddingHorizontal: 18,
    paddingVertical: 9,
  },
  chooseText: {
    fontFamily: fonts.bold,
    fontSize: 12.5,
    color: colors.text,
  },
  thumbs: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 22,
  },
  thumb: {
    width: 100,
    height: 72,
    borderRadius: radius.sm,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbRemove: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notes: {
    backgroundColor: '#161616',
    borderRadius: radius.md,
    padding: 14,
    height: 110,
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: colors.text,
    textAlignVertical: 'top',
    marginBottom: 6,
  },
  charCount: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
    marginBottom: 18,
  },
});
