import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';

const DOCS = [
  { key: '1', title: 'Pilot License', uploaded: 'license.pdf', done: true },
  { key: '2', title: 'Drone Registration Certificate', done: false },
  { key: '3', title: 'Insurance Certificate', done: false },
  { key: '4', title: 'Government-Issued ID', done: false },
];

// "Upload Credentials" — pilot qualification documents with progress
export default function UploadCredentialsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <ScreenHeader title="Upload Credentials" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Text style={styles.subtitle}>Verify your qualifications to start accepting missions</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>1 of 4 uploaded</Text>
            <Text style={styles.progressPct}>25% Complete</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '25%' }]} />
          </View>

          {DOCS.map((doc) => (
            <View key={doc.key} style={styles.docCard}>
              <View style={styles.docTitleRow}>
                <Text style={styles.docTitle}>{doc.title}</Text>
                {doc.done ? <Ionicons name="checkmark-circle-outline" size={18} color="#4ECB71" /> : null}
              </View>
              <TouchableOpacity style={styles.dropzone} activeOpacity={0.8}>
                <Ionicons name="cloud-upload-outline" size={24} color={colors.textSecondary} />
                <Text style={styles.dropTitle}>Tap to upload</Text>
                {doc.done ? (
                  <Text style={styles.uploaded}>{doc.uploaded} {'✓'}</Text>
                ) : (
                  <Text style={styles.dropSub}>PDF, JPG or PNG {'·'} Max 10MB</Text>
                )}
              </TouchableOpacity>
            </View>
          ))}

          <PrimaryButton label="Submit for Review" style={{ marginTop: 10 }} onPress={() => navigation.goBack()} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
    marginBottom: 14,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.text,
  },
  progressPct: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
  progressTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2C2C2C',
    marginBottom: 22,
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  docCard: {
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 16,
  },
  docTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  docTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
  },
  dropzone: {
    borderWidth: 1.5,
    borderColor: '#3A3A3A',
    borderStyle: 'dashed',
    borderRadius: radius.md,
    alignItems: 'center',
    paddingVertical: 20,
  },
  dropTitle: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.text,
    marginTop: 8,
    marginBottom: 3,
  },
  dropSub: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.textTertiary,
  },
  uploaded: {
    fontFamily: fonts.regular,
    fontSize: 11,
    color: '#4ECB71',
  },
});
