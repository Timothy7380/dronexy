import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';
import PrimaryButton from '../components/PrimaryButton';

// "Enable precise location" gate before entering the app
export default function EnableLocationScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.pin}>
          <Ionicons name="location" size={34} color={colors.black} />
        </View>
        <Text style={styles.title}>Enable precise{'\n'}location</Text>
        <Text style={styles.subtitle}>
          You'll need to enable your location in order to use this app.
        </Text>
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          label="Enable"
          onPress={() => navigation.replace(route.params?.role === 'pilot' ? 'PilotMain' : 'Main')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  pin: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 24,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
  },
  footer: {
    paddingHorizontal: 28,
    paddingBottom: 32,
  },
});
