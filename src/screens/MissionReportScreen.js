import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';

const FILES = [
  { key: '1', name: 'footage.mp4 (245 MB)' },
  { key: '2', name: 'orthomosaic.tif (89 MB)' },
];

// "Mission Report" — summary, deliverables, completion status, submit
export default function MissionReportScreen({ navigation }) {
  const [status, setStatus] = useState('complete');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mission Report</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          <Text style={styles.missionId}>Mission #DRN-2048</Text>
          <Text style={styles.title}>Aerial Survey {'–'} Lagos Island</Text>

          <Text style={styles.sectionTitle}>Mission Summary</Text>
          <TextInput
            style={styles.summary}
            placeholder="Describe the mission outcome..."
            placeholderTextColor={colors.textPlaceholder}
            multiline
          />

          <Text style={styles.sectionTitle}>Upload Deliverables</Text>
          <TouchableOpacity style={styles.dropzone} activeOpacity={0.8}>
            <Ionicons name="cloud-upload-outline" size={26} color={colors.textSecondary} />
            <Text style={styles.dropText}>Drag files or tap to upload</Text>
          </TouchableOpacity>

          {FILES.map((f) => (
            <View key={f.key} style={styles.fileRow}>
              <Text style={styles.fileName}>{f.name}</Text>
              <Ionicons name="checkmark" size={16} color="#4ECB71" />
            </View>
          ))}

          <Text style={styles.sectionTitle}>Mission Status</Text>
          <TouchableOpacity style={styles.radioRow} onPress={() => setStatus('complete')}>
            <Text style={styles.radioLabel}>Completed Successfully</Text>
            <View style={[styles.radio, status === 'complete' && styles.radioOn]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioRow} onPress={() => setStatus('partial')}>
            <Text style={styles.radioLabel}>Partially Completed</Text>
            <View style={[styles.radio, status === 'partial' && styles.radioOn]} />
          </TouchableOpacity>

          <PrimaryButton
            label="Submit Report"
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate('PilotMain')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  inner: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  missionId: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginBottom: 10,
  },
  summary: {
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: radius.md,
    padding: 14,
    height: 90,
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: colors.text,
    textAlignVertical: 'top',
    marginBottom: 22,
  },
  dropzone: {
    borderWidth: 1.5,
    borderColor: '#3A3A3A',
    borderStyle: 'dashed',
    borderRadius: radius.md,
    alignItems: 'center',
    paddingVertical: 22,
    marginBottom: 12,
  },
  dropText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 8,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1F',
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 8,
  },
  fileName: {
    fontFamily: fonts.regular,
    fontSize: 12.5,
    color: colors.text,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1F',
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 8,
  },
  radioLabel: {
    fontFamily: fonts.regular,
    fontSize: 13.5,
    color: colors.text,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#4A4A4A',
  },
  radioOn: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
});
