import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '../theme';

// Booking step 1 of 3 — "Service Request" (light theme, yellow-highlight title)
export default function ServiceRequestScreen({ navigation, route }) {
  const category = route.params?.category || 'Surveying and Mapping';

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color="#111111" />
            </TouchableOpacity>
            <View style={styles.titleHighlight}>
              <Text style={styles.title}>Service Request</Text>
            </View>
            <View style={{ width: 22 }} />
          </View>

          {/* Step dots */}
          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.step}>Step 1 of 3 {'·'} Service Details</Text>

          {/* Service category */}
          <Text style={styles.label}>Service Category</Text>
          <TouchableOpacity style={styles.field} activeOpacity={0.8}>
            <Text style={styles.fieldValue}>{category}</Text>
            <Ionicons name="chevron-down" size={16} color="#8A8A8A" />
          </TouchableOpacity>

          {/* Location */}
          <Text style={styles.label}>Location</Text>
          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#9A9A9A" />
            <Ionicons name="location-outline" size={16} color="#8A8A8A" />
          </View>

          {/* Map pin box */}
          <TouchableOpacity style={styles.mapBox} activeOpacity={0.8}>
            <Ionicons name="location-outline" size={22} color="#111111" />
            <Text style={styles.mapText}>Tap to pin location</Text>
          </TouchableOpacity>

          <View style={styles.field}>
            <TextInput style={styles.input} placeholder="Area Size/Length" placeholderTextColor="#9A9A9A" />
            <Ionicons name="resize-outline" size={16} color="#8A8A8A" />
          </View>

          {/* Purpose */}
          <Text style={styles.label}>Purpose of Mission</Text>
          <View style={styles.textarea}>
            <TextInput
              style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
              placeholder="Describe your mission requirements"
              placeholderTextColor="#9A9A9A"
              multiline
            />
          </View>

          {/* Additional information */}
          <TouchableOpacity style={styles.field} activeOpacity={0.8}>
            <Text style={styles.additional}>Additional Information</Text>
            <Ionicons name="add" size={18} color="#8A8A8A" />
          </TouchableOpacity>

          {/* Upload */}
          <TouchableOpacity style={styles.uploadChip} activeOpacity={0.8}>
            <Ionicons name="cloud-upload-outline" size={14} color="#6A6A6A" />
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>

          {/* CTA */}
          <TouchableOpacity
            style={styles.cta}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('ReviewRequest')}
          >
            <Text style={styles.ctaText}>Continue to Review</Text>
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
  titleHighlight: {
    backgroundColor: '#FFE93B',
    paddingHorizontal: 8,
    paddingVertical: 3,
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
    marginBottom: 20,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#111111',
    marginBottom: 8,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  fieldValue: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#111111',
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#111111',
    paddingVertical: 0,
  },
  mapBox: {
    height: 130,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 16,
  },
  mapText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#6A6A6A',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  additional: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#111111',
  },
  uploadChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 24,
  },
  uploadText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: '#6A6A6A',
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
