import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';

function Field({ label, value, verified, flag, chevron }) {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        {flag ? <Text style={styles.flag}>{'\u{1F1F3}\u{1F1EC}'}</Text> : null}
        <TextInput style={styles.input} defaultValue={value} placeholderTextColor={colors.textPlaceholder} />
        {verified ? <Ionicons name="checkmark-circle" size={18} color="#1B9D4B" /> : null}
        {chevron ? <Ionicons name="chevron-down" size={16} color={colors.textPlaceholder} /> : null}
      </View>
    </View>
  );
}

// "Personal Information" — editable profile fields + change photo
export default function PersonalInformationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.inner}>
        <ScreenHeader title="Personal Information" onBack={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {/* Avatar */}
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={30} color="#7A7A7A" />
              <View style={styles.cameraBadge}>
                <Ionicons name="camera" size={12} color={colors.black} />
              </View>
            </View>
            <Text style={styles.changePhoto}>Change Photo</Text>
          </View>

          <Field label="First Name" value="Rachael" />
          <Field label="Last Name" value="Ayeni" />
          <Field label="Username" value="@rachael.ayeni" />
          <Field label="Email Address" value="rachael@email.com" verified />
          <Field label="Phone Number" value="+234 812 000 0000" flag />
          <Field label="Date of Birth" value="14 March 1992" />
          <Field label="Gender" value="Female" chevron />
          <Field label="Address" value="14 Commercial Avenue, Lagos" />

          <PrimaryButton label="Save Changes" style={{ marginTop: 10 }} onPress={() => navigation.goBack()} />
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
  avatarWrap: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 6,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cameraBadge: {
    position: 'absolute',
    right: -2,
    bottom: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.bgAlt,
  },
  changePhoto: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
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
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: 14,
  },
  flag: {
    fontSize: 15,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
});
