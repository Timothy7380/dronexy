import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts, radius } from '../theme';
import PrimaryButton from '../components/PrimaryButton';

// "Get Started!" — hero photo card with Dronexy wordmark, then CTA buttons.
// Drop the exported Figma photo at assets/get-started.jpg and swap the source below.
export default function GetStartedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroWrap}>
        <ImageBackground
          source={require('../../assets/get-started.png')}
          style={styles.hero}
          imageStyle={{ borderRadius: radius.lg }}
        >
          <View style={styles.heroOverlay}>
            <Image source={require('../../assets/logo-white.png')} style={styles.wordmarkImage} />
            <Text style={styles.tagline}>Find. Manage. Control.</Text>
            <View style={styles.dots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.title}>Get Started!</Text>

      <View style={styles.buttons}>
        <PrimaryButton label="Create Account" onPress={() => navigation.navigate('SignUpAs')} />
        <PrimaryButton
          label="Sign In"
          variant="outline"
          style={{ marginTop: 14 }}
          onPress={() => navigation.navigate('SignIn')}
        />
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
  heroWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  hero: {
    height: 420,
    borderRadius: radius.lg,
    backgroundColor: '#2A2A2A',
    overflow: 'hidden',
  },
  heroOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 28,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: radius.lg,
  },
  wordmarkImage: {
    width: 180,
    height: 73,
    resizeMode: 'contain',
  },
  tagline: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.white,
    marginTop: 4,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 18,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  dotActive: {
    width: 22,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  buttons: {
    paddingBottom: 32,
  },
});
