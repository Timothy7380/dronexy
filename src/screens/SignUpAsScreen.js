import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

// "Sign Up as..." — choose XY PILOT or XY CLIENT
function RoleCard({ label, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card} onPress={onPress}>
      <Text style={styles.cardLabel}>{label}</Text>
      <View style={styles.cardArrow}>
        <Ionicons name="chevron-forward" size={18} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default function SignUpAsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>

      <View style={styles.body}>
        <Text style={styles.title}>Sign Up as...</Text>
        <RoleCard label="XY PILOT" onPress={() => navigation.navigate('SignUpPilot')} />
        <RoleCard label="XY CLIENT" onPress={() => navigation.navigate('SignUpClient')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
    paddingHorizontal: 28,
  },
  back: {
    marginTop: 12,
  },
  backText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 26,
    color: colors.text,
    marginBottom: 28,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    height: 78,
    paddingHorizontal: 22,
    marginBottom: 20,
  },
  cardLabel: {
    fontFamily: fonts.black,
    fontSize: 22,
    fontStyle: 'italic',
    color: colors.black,
    letterSpacing: 1,
  },
  cardArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
