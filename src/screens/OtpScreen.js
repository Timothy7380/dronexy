import React, { useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';

const CODE_LENGTH = 6;

// OTP Verification — six code boxes + resend link
export default function OtpScreen({ navigation, route }) {
  const [code, setCode] = useState('');
  const inputRef = useRef(null);

  const digits = code.split('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ScreenHeader title="OTP Verification" onBack={() => navigation.goBack()} />

        <Text style={styles.subtitle}>
          Please verify by entering the code that was sent to your email or phone number
        </Text>

        <View style={styles.boxes} onTouchStart={() => inputRef.current?.focus()}>
          {Array.from({ length: CODE_LENGTH }).map((_, i) => (
            <View key={i} style={[styles.box, i === digits.length && styles.boxActive]}>
              <Text style={styles.digit}>{digits[i] || ''}</Text>
            </View>
          ))}
        </View>
        {/* Hidden input drives all six boxes */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={(t) => setCode(t.replace(/\D/g, '').slice(0, CODE_LENGTH))}
          keyboardType="number-pad"
          maxLength={CODE_LENGTH}
          style={styles.hiddenInput}
          autoFocus
        />

        <Text style={styles.resend}>
          Didn't recieve code? <Text style={styles.resendBold}>resend</Text>
        </Text>

        <PrimaryButton
          label="Verify"
          style={{ marginTop: 26 }}
          onPress={() => navigation.navigate('OtpVerified', { role: route.params?.role })}
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
  inner: {
    flex: 1,
    paddingHorizontal: 28,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
    marginBottom: 22,
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 48,
    height: 52,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxActive: {
    borderColor: colors.white,
  },
  digit: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    height: 0,
  },
  resend: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 18,
  },
  resendBold: {
    fontFamily: fonts.bold,
    color: colors.text,
  },
});
