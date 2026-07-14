import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';

const DOCS = [
  { key: 'license', label: 'Drone License', trailing: 'checkmark-circle-outline' },
  { key: 'gov', label: 'Government ID', trailing: 'share-outline' },
  { key: 'cert', label: 'Pilot Certification', trailing: 'share-outline' },
  { key: 'insurance', label: 'Insurance Certificate', trailing: 'share-outline' },
  { key: 'optional', label: 'Optional Documents', trailing: 'share-outline', placeholder: 'Upload here' },
];

// Pilot document upload checklist -> Create Pilot Account
export default function UploadDocumentsScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ScreenHeader title="Upload Documents" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {DOCS.map((doc) => (
            <View key={doc.key} style={styles.group}>
              <Text style={styles.label}>{doc.label}</Text>
              <TouchableOpacity activeOpacity={0.8} style={styles.field}>
                <Text style={styles.placeholder}>{doc.placeholder || 'Upload Document here'}</Text>
                <Ionicons name={doc.trailing} size={18} color={colors.textPlaceholder} />
              </TouchableOpacity>
            </View>
          ))}

          <PrimaryButton
            label="Create Pilot Account"
            style={{ marginTop: 22, marginBottom: 24 }}
            onPress={() => navigation.navigate('Otp', { role: 'pilot' })}
          />
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
  group: {
    marginBottom: 18,
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
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: 14,
  },
  placeholder: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textPlaceholder,
  },
});
