import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '../components/TextField';

// Sign In — username/email + password, forgot password, Google fallback
export default function SignInScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign In</Text>

        <TextField label="Username/Email" placeholder="Username/Email" icon="person-outline" />
        <TextField label="Password" placeholder="Password" icon="shield-checkmark-outline" secure />

        <TouchableOpacity style={styles.forgotRow}>
          <Ionicons name="information-circle-outline" size={15} color={colors.textSecondary} />
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <PrimaryButton
          label="Sign In"
          style={{ marginTop: 26 }}
          onPress={() => navigation.replace('EnableLocation', { role: route.params?.role })}
        />
        <Text style={styles.google}>
          Continue with <Text style={styles.googleBold}>Google</Text>
        </Text>
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
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.text,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 30,
  },
  forgotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: -6,
  },
  forgot: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  google: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 18,
  },
  googleBold: {
    fontFamily: fonts.bold,
    color: colors.text,
  },
});
