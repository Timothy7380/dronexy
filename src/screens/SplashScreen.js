import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';
import { colors } from '../theme';

// Splash — Dronexy logo (exported from Figma), fades in then continues to onboarding.
export default function SplashScreen({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 700, useNativeDriver: true }).start();
    const t = setTimeout(() => navigation.replace('Onboarding'), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fade }}>
        <Image source={require('../../assets/logo-white.png')} style={styles.logo} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 89,
    resizeMode: 'contain',
  },
});
